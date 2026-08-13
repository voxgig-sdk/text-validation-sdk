# TextValidation SDK feature factory

from textvalidation_sdk.feature.base_feature import TextValidationBaseFeature
from textvalidation_sdk.feature.test_feature import TextValidationTestFeature


def _make_feature(name):
    features = {
        "base": lambda: TextValidationBaseFeature(),
        "test": lambda: TextValidationTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
