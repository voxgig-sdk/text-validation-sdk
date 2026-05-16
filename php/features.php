<?php
declare(strict_types=1);

// TextValidation SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class TextValidationFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new TextValidationBaseFeature();
            case "test":
                return new TextValidationTestFeature();
            default:
                return new TextValidationBaseFeature();
        }
    }
}
