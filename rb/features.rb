# TextValidation SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module TextValidationFeatures
  def self.make_feature(name)
    case name
    when "base"
      TextValidationBaseFeature.new
    when "test"
      TextValidationTestFeature.new
    else
      TextValidationBaseFeature.new
    end
  end
end
