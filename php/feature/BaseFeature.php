<?php
declare(strict_types=1);

// TextValidation SDK base feature

class TextValidationBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(TextValidationContext $ctx, array $options): void {}
    public function PostConstruct(TextValidationContext $ctx): void {}
    public function PostConstructEntity(TextValidationContext $ctx): void {}
    public function SetData(TextValidationContext $ctx): void {}
    public function GetData(TextValidationContext $ctx): void {}
    public function GetMatch(TextValidationContext $ctx): void {}
    public function SetMatch(TextValidationContext $ctx): void {}
    public function PrePoint(TextValidationContext $ctx): void {}
    public function PreSpec(TextValidationContext $ctx): void {}
    public function PreRequest(TextValidationContext $ctx): void {}
    public function PreResponse(TextValidationContext $ctx): void {}
    public function PreResult(TextValidationContext $ctx): void {}
    public function PreDone(TextValidationContext $ctx): void {}
    public function PreUnexpected(TextValidationContext $ctx): void {}
}
