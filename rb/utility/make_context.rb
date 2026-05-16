# TextValidation SDK utility: make_context
require_relative '../core/context'
module TextValidationUtilities
  MakeContext = ->(ctxmap, basectx) {
    TextValidationContext.new(ctxmap, basectx)
  }
end
