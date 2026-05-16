# TextValidation SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

TextValidationUtility.registrar = ->(u) {
  u.clean = TextValidationUtilities::Clean
  u.done = TextValidationUtilities::Done
  u.make_error = TextValidationUtilities::MakeError
  u.feature_add = TextValidationUtilities::FeatureAdd
  u.feature_hook = TextValidationUtilities::FeatureHook
  u.feature_init = TextValidationUtilities::FeatureInit
  u.fetcher = TextValidationUtilities::Fetcher
  u.make_fetch_def = TextValidationUtilities::MakeFetchDef
  u.make_context = TextValidationUtilities::MakeContext
  u.make_options = TextValidationUtilities::MakeOptions
  u.make_request = TextValidationUtilities::MakeRequest
  u.make_response = TextValidationUtilities::MakeResponse
  u.make_result = TextValidationUtilities::MakeResult
  u.make_point = TextValidationUtilities::MakePoint
  u.make_spec = TextValidationUtilities::MakeSpec
  u.make_url = TextValidationUtilities::MakeUrl
  u.param = TextValidationUtilities::Param
  u.prepare_auth = TextValidationUtilities::PrepareAuth
  u.prepare_body = TextValidationUtilities::PrepareBody
  u.prepare_headers = TextValidationUtilities::PrepareHeaders
  u.prepare_method = TextValidationUtilities::PrepareMethod
  u.prepare_params = TextValidationUtilities::PrepareParams
  u.prepare_path = TextValidationUtilities::PreparePath
  u.prepare_query = TextValidationUtilities::PrepareQuery
  u.result_basic = TextValidationUtilities::ResultBasic
  u.result_body = TextValidationUtilities::ResultBody
  u.result_headers = TextValidationUtilities::ResultHeaders
  u.transform_request = TextValidationUtilities::TransformRequest
  u.transform_response = TextValidationUtilities::TransformResponse
}
