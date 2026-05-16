-- TextValidation SDK error

local TextValidationError = {}
TextValidationError.__index = TextValidationError


function TextValidationError.new(code, msg, ctx)
  local self = setmetatable({}, TextValidationError)
  self.is_sdk_error = true
  self.sdk = "TextValidation"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function TextValidationError:error()
  return self.msg
end


function TextValidationError:__tostring()
  return self.msg
end


return TextValidationError
