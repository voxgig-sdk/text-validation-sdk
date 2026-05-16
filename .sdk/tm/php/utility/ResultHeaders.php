<?php
declare(strict_types=1);

// TextValidation SDK utility: result_headers

class TextValidationResultHeaders
{
    public static function call(TextValidationContext $ctx): ?TextValidationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
