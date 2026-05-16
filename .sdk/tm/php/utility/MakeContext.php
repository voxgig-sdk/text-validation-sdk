<?php
declare(strict_types=1);

// TextValidation SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class TextValidationMakeContext
{
    public static function call(array $ctxmap, ?TextValidationContext $basectx): TextValidationContext
    {
        return new TextValidationContext($ctxmap, $basectx);
    }
}
