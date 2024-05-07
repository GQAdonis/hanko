package registration_method_chooser

import (
	"github.com/teamhanko/hanko/backend/flow_api/flow/shared"
	"github.com/teamhanko/hanko/backend/flowpilot"
)

type Back struct {
	shared.Action
}

func (a Back) GetName() flowpilot.ActionName {
	return ActionBack
}

func (a Back) GetDescription() string {
	return "Navigate one step back."
}

func (a Back) Initialize(c flowpilot.InitializationContext) {
	deps := a.GetDeps(c)

	if deps.Cfg.Email.RequireVerification {
		c.SuspendAction()
	}
}

func (a Back) Execute(c flowpilot.ExecutionContext) error {
	return c.ContinueToPreviousState()
}

func (a Back) Finalize(c flowpilot.FinalizationContext) error {
	return nil
}
