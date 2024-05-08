package login

import (
	"fmt"
	"github.com/teamhanko/hanko/backend/flow_api/flow/shared"
	"github.com/teamhanko/hanko/backend/flowpilot"
)

type SelectPasscodeTemplate struct {
	shared.Action
}

func (a SelectPasscodeTemplate) Execute(c flowpilot.HookExecutionContext) error {
	if c.Stash().Get("user_id").Exists() {
		if err := c.Stash().Set("passcode_template", "login"); err != nil {
			return fmt.Errorf("failed to set passcode_template to the stash: %w", err)
		}
	} else {
		if err := c.Stash().Set("passcode_template", "email_login_attempted"); err != nil {
			return fmt.Errorf("failed to set passcode_template to the stash: %w", err)
		}
	}

	return nil
}
