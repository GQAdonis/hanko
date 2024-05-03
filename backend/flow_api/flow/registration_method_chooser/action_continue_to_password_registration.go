package registration_method_chooser

import (
	"github.com/teamhanko/hanko/backend/flow_api/flow/registration_register_password"
	"github.com/teamhanko/hanko/backend/flow_api/flow/shared"
	"github.com/teamhanko/hanko/backend/flowpilot"
)

type ContinueToPasswordRegistration struct {
	shared.Action
}

func (a ContinueToPasswordRegistration) GetName() flowpilot.ActionName {
	return ActionContinueToPasswordRegistration
}

func (a ContinueToPasswordRegistration) GetDescription() string {
	return "Continue to password registration"
}

func (a ContinueToPasswordRegistration) Initialize(c flowpilot.InitializationContext) {
}

func (a ContinueToPasswordRegistration) Execute(c flowpilot.ExecutionContext) error {
	return c.StartSubFlow(registration_register_password.StatePasswordCreation)
}

func (a ContinueToPasswordRegistration) Finalize(c flowpilot.FinalizationContext) error {
	return nil
}
