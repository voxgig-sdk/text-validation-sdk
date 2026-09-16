# TextValidation SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module TextValidationFeatures
  def self.make_feature(name)
    case name
    when "base"
      TextValidationBaseFeature.new
    when "ratelimit"
      TextValidationRatelimitFeature.new
    when "retry"
      TextValidationRetryFeature.new
    when "test"
      TextValidationTestFeature.new
    when "timeout"
      TextValidationTimeoutFeature.new
    else
      TextValidationBaseFeature.new
    end
  end
end
