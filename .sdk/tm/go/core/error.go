package core

import "encoding/json"

type TextValidationError struct {
	IsTextValidationError bool
	Sdk                string
	Code               string
	Msg                string
	// Reachable for a debugger, invisible to a serialiser: the context holds
	// the live spec and options, and an error is what gets logged.
	Ctx    *Context `json:"-"`
	Result any
	Spec   any
}

func NewTextValidationError(code string, msg string, ctx *Context) *TextValidationError {
	return &TextValidationError{
		IsTextValidationError: true,
		Sdk:                "TextValidation",
		Code:               code,
		Msg:                msg,
		Ctx:                ctx,
	}
}

func (e *TextValidationError) Error() string {
	return e.Msg
}

// What makeError attached is already cleaned; the context is not part of
// the record.
func (e *TextValidationError) Record() map[string]any {
	return map[string]any{
		"sdk":     e.Sdk,
		"code":    e.Code,
		"message": e.Msg,
		"result":  e.Result,
		"spec":    e.Spec,
	}
}

func (e *TextValidationError) MarshalJSON() ([]byte, error) {
	return json.Marshal(e.Record())
}
