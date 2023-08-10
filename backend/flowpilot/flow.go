package flowpilot

import (
	"errors"
	"fmt"
	"time"
)

// InputData holds input data in JSON format.
type InputData struct {
	JSONString string `json:"input_data"`
}

// getJSONStringOrDefault returns the JSON string or a default "{}" value.
func (i InputData) getJSONStringOrDefault() string {
	if len(i.JSONString) == 0 {
		return "{}"
	}

	return i.JSONString
}

// flowExecutionOptions represents options for executing a Flow.
type flowExecutionOptions struct {
	action    string
	inputData InputData
}

// WithActionParam sets the MethodName for flowExecutionOptions.
func WithActionParam(action string) func(*flowExecutionOptions) {
	return func(f *flowExecutionOptions) {
		f.action = action
	}
}

// WithInputData sets the InputData for flowExecutionOptions.
func WithInputData(inputData InputData) func(*flowExecutionOptions) {
	return func(f *flowExecutionOptions) {
		f.inputData = inputData
	}
}

// TODO: Not sure if we really want to have these types for state and method names

// StateName represents the name of a state in a Flow.
type StateName string

// MethodName represents the name of a method associated with a Transition.
type MethodName string

// TODO: Should it be possible to partially implement the Method interface? E.g. when a method does not require initialization.

// Method defines the interface for flow methods.
type Method interface {
	GetName() MethodName              // Get the method name.
	GetDescription() string           // Get the method description.
	Initialize(InitializationContext) // Initialize the method.
	Execute(ExecutionContext) error   // Execute the method.
}

// Transition holds a method associated with a state transition.
type Transition struct {
	Method Method
}

// Transitions is a collection of Transition instances.
type Transitions []Transition

// getMethod returns the Method associated with the specified name.
func (ts *Transitions) getMethod(methodName MethodName) (Method, error) {
	for _, t := range *ts {
		if t.Method.GetName() == methodName {
			return t.Method, nil
		}
	}

	return nil, errors.New(fmt.Sprintf("method '%s' not valid", methodName))
}

// StateTransitions maps states to associated Transitions.
type StateTransitions map[StateName]Transitions

// Flow defines a flow structure with states, transitions, and settings.
type Flow struct {
	Flow         StateTransitions // State transitions mapping.
	Path         string           // Flow path or identifier.
	InitialState StateName        // Initial state of the flow.
	ErrorState   StateName        // State representing errors.
	EndState     StateName        // Final state of the flow.
	TTL          time.Duration    // Time-to-live for the flow.
}

// stateExists checks if a state exists in the Flow.
func (f *Flow) stateExists(stateName StateName) bool {
	_, ok := f.Flow[stateName]
	return ok
}

// getTransitionsForState returns transitions for a specified state.
func (f *Flow) getTransitionsForState(stateName StateName) *Transitions {
	if ts, ok := f.Flow[stateName]; ok && len(ts) > 0 {
		return &ts
	}
	return nil
}

// setDefaults sets default values for Flow settings.
func (f *Flow) setDefaults() {
	if f.TTL.Seconds() == 0 {
		f.TTL = time.Minute * 60
	}
}

// validate performs validation checks on the Flow configuration.
func (f *Flow) validate() error {
	// Validate fixed states and their presence in the Flow.
	if len(f.InitialState) == 0 {
		return errors.New("fixed state 'InitialState' is not set")
	}
	if len(f.ErrorState) == 0 {
		return errors.New("fixed state 'ErrorState' is not set")
	}
	if len(f.EndState) == 0 {
		return errors.New("fixed state 'EndState' is not set")
	}
	if !f.stateExists(f.InitialState) {
		return errors.New("fixed state 'InitialState' does not belong to the flow")
	}
	if !f.stateExists(f.ErrorState) {
		return errors.New("fixed state 'ErrorState' does not belong to the flow")
	}
	if !f.stateExists(f.EndState) {
		return errors.New("fixed state 'EndState' does not belong to the flow")
	}
	if ts := f.getTransitionsForState(f.EndState); ts != nil {
		return fmt.Errorf("the specified EndState '%s' is not allowed to have transitions", f.EndState)
	}

	// TODO: Additional validation for unique State and Method names,...

	return nil
}

// Execute handles the execution of actions for a Flow.
func (f *Flow) Execute(db FlowDB, opts ...func(*flowExecutionOptions)) (*Response, error) {
	// Process execution options.
	var executionOptions flowExecutionOptions
	for _, option := range opts {
		option(&executionOptions)
	}

	// Set default values for Flow settings.
	f.setDefaults()

	// Perform validation checks on the Flow configuration.
	if err := f.validate(); err != nil {
		return nil, fmt.Errorf("invalid flow: %w", err)
	}

	if len(executionOptions.action) == 0 {
		// If the action is empty, create a new Flow.
		return createAndInitializeFlow(db, *f)
	}

	// Otherwise, update an existing Flow.
	return executeFlowMethod(db, *f, executionOptions)
}

// ErrorResponse returns an error response for the Flow.
func (f *Flow) ErrorResponse() *Response {
	return &Response{
		State: f.ErrorState,
		Error: TechnicalError,
	}
}
