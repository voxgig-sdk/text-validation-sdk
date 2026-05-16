# TextValidation SDK utility: make_context

from core.context import TextValidationContext


def make_context_util(ctxmap, basectx):
    return TextValidationContext(ctxmap, basectx)
