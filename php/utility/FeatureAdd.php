<?php
declare(strict_types=1);

// TextValidation SDK utility: feature_add

class TextValidationFeatureAdd
{
    public static function call(TextValidationContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
