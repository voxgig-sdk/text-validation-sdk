# ProjectName SDK exists test

import pytest
from textvalidation_sdk import TextValidationSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = TextValidationSDK.test(None, None)
        assert testsdk is not None
