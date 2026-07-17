-- TextValidation SDK exists test

local sdk = require("text-validation_sdk")

describe("TextValidationSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
