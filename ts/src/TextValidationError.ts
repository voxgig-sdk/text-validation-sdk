
import { Context } from './Context'


class TextValidationError extends Error {

  isTextValidationError = true

  sdk = 'TextValidation'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  TextValidationError
}

