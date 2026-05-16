package core

type TextValidationError struct {
	IsTextValidationError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewTextValidationError(code string, msg string, ctx *Context) *TextValidationError {
	return &TextValidationError{
		IsTextValidationError: true,
		Sdk:              "TextValidation",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *TextValidationError) Error() string {
	return e.Msg
}
