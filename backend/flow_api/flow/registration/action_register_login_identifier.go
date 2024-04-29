package registration

import (
	"errors"
	"fmt"
	"github.com/gofrs/uuid"
	"github.com/teamhanko/hanko/backend/flow_api/flow/passcode"
	"github.com/teamhanko/hanko/backend/flow_api/flow/shared"
	"github.com/teamhanko/hanko/backend/flowpilot"
	"unicode/utf8"
)

// RegisterLoginIdentifier takes the identifier which the user entered and checks if they are valid and available according to the configuration
type RegisterLoginIdentifier struct {
	shared.Action
}

func (a RegisterLoginIdentifier) GetName() flowpilot.ActionName {
	return ActionRegisterLoginIdentifier
}

func (a RegisterLoginIdentifier) GetDescription() string {
	return "Enter an identifier to register."
}

func (a RegisterLoginIdentifier) Initialize(c flowpilot.InitializationContext) {
	deps := a.GetDeps(c)

	if deps.Cfg.Email.Enabled && deps.Cfg.Email.AcquireOnRegistration {
		input := flowpilot.EmailInput("email").
			MaxLength(255).
			Persist(true).
			Preserve(true).
			Required(!deps.Cfg.Identifier.Email.Optional)

		c.AddInputs(input)
	}

	if deps.Cfg.Username.Enabled && deps.Cfg.Username.AcquireOnRegistration {
		input := flowpilot.StringInput("username").
			MinLength(deps.Cfg.Username.MinLength).
			MaxLength(deps.Cfg.Username.MaxLength).
			Persist(true).
			Preserve(true).
			Required(!deps.Cfg.Username.Optional)

		c.AddInputs(input)
	}
}

func (a RegisterLoginIdentifier) Execute(c flowpilot.ExecutionContext) error {
	deps := a.GetDeps(c)

	if valid := c.ValidateInputData(); !valid {
		return c.ContinueFlowWithError(c.GetCurrentState(), flowpilot.ErrorFormDataInvalid)
	}

	email := c.Input().Get("email").String()
	username := c.Input().Get("username").String()

	// check that username only contains allowed characters
	if !utf8.ValidString(username) {
		c.Input().SetError("username", flowpilot.ErrorValueInvalid.Wrap(errors.New("username contains invalid characters")))
		return c.ContinueFlowWithError(c.GetCurrentState(), flowpilot.ErrorFormDataInvalid)
	}

	if username != "" {
		// Check that username is not already taken
		// this check is non-exhaustive as the username is not blocked here and might be created after the check here and the user creation
		userModel, err := deps.Persister.GetUserPersister().GetByUsername(username)
		if err != nil {
			return err
		}
		if userModel != nil {
			c.Input().SetError("username", shared.ErrorUsernameAlreadyExists)
			return c.ContinueFlowWithError(c.GetCurrentState(), flowpilot.ErrorFormDataInvalid)
		}
	}

	if email != "" {
		// Check that email is not already taken
		// this check is non-exhaustive as the email is not blocked here and might be created after the check here and the user creation
		emailModel, err := deps.Persister.GetEmailPersister().FindByAddress(email)
		if err != nil {
			return err
		}
		// Do not return an error when only identifier is email and email verification is on (account enumeration protection)
		if emailModel != nil {
			// E-mail address already exists
			if !deps.Cfg.Email.RequireVerification {
				c.Input().SetError("email", shared.ErrorEmailAlreadyExists)
				return c.ContinueFlowWithError(c.GetCurrentState(), flowpilot.ErrorFormDataInvalid)
			} else {
				err = c.CopyInputValuesToStash("email")
				if err != nil {
					return fmt.Errorf("failed to copy email to stash: %w", err)
				}

				err = c.Stash().Set("passcode_template", "email_registration_attempted")
				if err != nil {
					return fmt.Errorf("failed to set passcode_template to the stash: %w", err)
				}

				return c.StartSubFlow(passcode.StatePasscodeConfirmation)
			}
		}
	}

	err := c.CopyInputValuesToStash("email", "username")
	if err != nil {
		return fmt.Errorf("failed to copy input values to the stash: %w", err)
	}

	userID, err := uuid.NewV4()
	if err != nil {
		return fmt.Errorf("failed to generate a new user id: %w", err)
	}

	err = c.Stash().Set("user_id", userID.String())
	if err != nil {
		return fmt.Errorf("failed to stash user_id: %w", err)
	}

	// Decide which is the next state according to the config and user input

	if email != "" && deps.Cfg.Email.RequireVerification {
		if err := c.Stash().Set("passcode_template", "email_verification"); err != nil {
			return fmt.Errorf("failed to set passcode_template to stash: %w", err)
		}

		if deps.Cfg.Password.Enabled && deps.Cfg.Passkey.Enabled {
			if deps.Cfg.Password.Optional && deps.Cfg.Passkey.Optional {
				if deps.Cfg.Password.AcquireOnRegistration && deps.Cfg.Passkey.AcquireOnRegistration {
					if deps.Cfg.Email.UseForAuthentication { // Brauch ich das?
						_ = c.Stash().Set("skip_to", shared.StateSuccess)
						//_ = c.Stash().Set("skip_from", StateRegistrationMethodChooser)
					}
					return c.StartSubFlow(passcode.StatePasscodeConfirmation, StateRegistrationMethodChooser) // + Skip
				} else if deps.Cfg.Password.AcquireOnRegistration && !deps.Cfg.Passkey.AcquireOnRegistration {
					_ = c.Stash().Set("skip_to", shared.StateSuccess)
					//_ = c.Stash().Set("skip_from", StatePasswordCreation)
					return c.StartSubFlow(passcode.StatePasscodeConfirmation, StatePasswordCreation) // + Skip für PasswordCreation
				} else if !deps.Cfg.Password.AcquireOnRegistration && deps.Cfg.Passkey.AcquireOnRegistration {
					_ = c.Stash().Set("skip_to", shared.StateSuccess)
					//_ = c.Stash().Set("skip_from", StateRegisterPasskey)
					return c.StartSubFlow(passcode.StatePasscodeConfirmation, StateRegisterPasskey) // + Skip für RegisterPasskey
				} else {
					if deps.Cfg.Email.UseForAuthentication {
						return c.StartSubFlow(passcode.StatePasscodeConfirmation, shared.StateSuccess)
					}
				}
			} else if deps.Cfg.Password.Optional && !deps.Cfg.Passkey.Optional {
				if deps.Cfg.Password.AcquireOnRegistration {
					// deps.Cfg.Passkey.AcquireOnRegistration egal, da Passkey required und !AcquireOnRegistration
					// keinen Sinn macht und durch Config Validierung verhindert werden sollte?
					return c.StartSubFlow(passcode.StatePasscodeConfirmation, StateRegisterPasskey, StatePasswordCreation) // + Skip für PasswordCreation
				} else {
					return c.StartSubFlow(passcode.StatePasscodeConfirmation, StateRegisterPasskey)
				}
			} else if !deps.Cfg.Password.Optional && deps.Cfg.Passkey.Optional {
				if deps.Cfg.Passkey.AcquireOnRegistration {
					return c.StartSubFlow(passcode.StatePasscodeConfirmation, StatePasswordCreation, StateRegisterPasskey) // + Skip für RegisterPasskey
				} else {
					return c.StartSubFlow(passcode.StatePasscodeConfirmation, StatePasswordCreation)
				}
			} else {
				return c.StartSubFlow(passcode.StatePasscodeConfirmation, StatePasswordCreation, StateRegisterPasskey)
			}
		} else if deps.Cfg.Password.Enabled && !deps.Cfg.Passkey.Enabled {
			if deps.Cfg.Password.Optional && deps.Cfg.Password.AcquireOnRegistration {
				return c.StartSubFlow(passcode.StatePasscodeConfirmation, StatePasswordCreation) // + Skip für PasswordCreation
			} else {
				return c.StartSubFlow(passcode.StatePasscodeConfirmation, StatePasswordCreation)
			}
		} else if !deps.Cfg.Password.Enabled && deps.Cfg.Passkey.Enabled {
			if deps.Cfg.Passkey.Optional && deps.Cfg.Passkey.AcquireOnRegistration {
				return c.StartSubFlow(passcode.StatePasscodeConfirmation, StateRegisterPasskey) // + Skip für RegisterPasskey
			} else {
				return c.StartSubFlow(passcode.StatePasscodeConfirmation, StateRegisterPasskey)
			}
		} else {
			if deps.Cfg.Email.UseForAuthentication {
				return c.StartSubFlow(passcode.StatePasscodeConfirmation, shared.StateSuccess)
			}
		}
	}

	return c.ContinueFlowWithError(c.GetCurrentState(), flowpilot.ErrorFlowDiscontinuity)
}

func (a RegisterLoginIdentifier) Finalize(c flowpilot.FinalizationContext) error {
	return nil
}
