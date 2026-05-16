# TextValidation SDK utility: feature_add
module TextValidationUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
