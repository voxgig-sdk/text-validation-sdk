<?php
declare(strict_types=1);

// TextValidation SDK exists test

require_once __DIR__ . '/../textvalidation_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = TextValidationSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
