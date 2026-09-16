# TextValidation SDK feature factory

from textvalidation_sdk.feature.base_feature import TextValidationBaseFeature
from textvalidation_sdk.feature.ratelimit_feature import TextValidationRatelimitFeature
from textvalidation_sdk.feature.retry_feature import TextValidationRetryFeature
from textvalidation_sdk.feature.test_feature import TextValidationTestFeature
from textvalidation_sdk.feature.timeout_feature import TextValidationTimeoutFeature


_FEATURES = {
    "base": lambda: TextValidationBaseFeature(),
    "ratelimit": lambda: TextValidationRatelimitFeature(),
    "retry": lambda: TextValidationRetryFeature(),
    "test": lambda: TextValidationTestFeature(),
    "timeout": lambda: TextValidationTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
