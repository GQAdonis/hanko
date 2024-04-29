package registration

import (
	"github.com/teamhanko/hanko/backend/flow_api/flow/capabilities"
	"github.com/teamhanko/hanko/backend/flow_api/flow/passcode"
	"github.com/teamhanko/hanko/backend/flow_api/flow/passkey_onboarding"
	"github.com/teamhanko/hanko/backend/flow_api/flow/shared"
	"github.com/teamhanko/hanko/backend/flowpilot"
	"time"
)

const (
	StateRegistrationInit          flowpilot.StateName = "registration_init"
	StatePasswordCreation          flowpilot.StateName = "password_creation"
	StateRegistrationMethodChooser flowpilot.StateName = "registration_method_chooser"
	StateRegisterPasskey           flowpilot.StateName = "register_passkey"
)

const (
	ActionRegisterPassword                  flowpilot.ActionName = "register_password"
	ActionRegisterLoginIdentifier           flowpilot.ActionName = "register_login_identifier"
	ActionWebauthnGenerateCreationOptions   flowpilot.ActionName = "webauthn_generate_creation_options"
	ActionWebauthnVerifyAttestationResponse flowpilot.ActionName = "webauthn_verify_attestation_response"
	ActionContinueToPasswordRegistration    flowpilot.ActionName = "continue_to_password_registration"
)

var Flow = flowpilot.NewFlow("/registration").
	State(StateRegistrationInit, RegisterLoginIdentifier{}, shared.ThirdPartyOAuth{}).
	State(StateRegistrationMethodChooser,
		WebauthnGenerateCreationOptions{},
		ContinueToPasswordRegistration{},
		shared.Back{},
		shared.Skip{},
	).
	State(StateRegisterPasskey, WebauthnVerifyAttestationResponse{}, shared.Skip{}). // macht das sinn?
	State(shared.StateThirdPartyOAuth, shared.ExchangeToken{}).
	State(StatePasswordCreation, RegisterPassword{}, shared.Back{}, shared.Skip{}).
	BeforeState(shared.StateSuccess, CreateUser{}, shared.IssueSession{}).
	State(shared.StateSuccess).
	State(shared.StateError).
	SubFlows(capabilities.SubFlow, passkey_onboarding.SubFlow, passcode.SubFlow).
	InitialState(capabilities.StatePreflight, StateRegistrationInit).
	ErrorState(shared.StateError).
	TTL(10 * time.Minute).
	Debug(true)
