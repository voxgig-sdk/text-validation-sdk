package = "voxgig-sdk-text-validation"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/text-validation-sdk.git"
}
description = {
  summary = "TextValidation SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["text-validation_sdk"] = "text-validation_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
