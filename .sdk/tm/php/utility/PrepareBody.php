<?php
declare(strict_types=1);

// TextValidation SDK utility: prepare_body

class TextValidationPrepareBody
{
    public static function call(TextValidationContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
