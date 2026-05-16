<?php
declare(strict_types=1);

// TextValidation SDK utility: result_body

class TextValidationResultBody
{
    public static function call(TextValidationContext $ctx): ?TextValidationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
