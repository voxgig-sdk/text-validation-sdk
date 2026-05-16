<?php
declare(strict_types=1);

// TextValidation SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

TextValidationUtility::setRegistrar(function (TextValidationUtility $u): void {
    $u->clean = [TextValidationClean::class, 'call'];
    $u->done = [TextValidationDone::class, 'call'];
    $u->make_error = [TextValidationMakeError::class, 'call'];
    $u->feature_add = [TextValidationFeatureAdd::class, 'call'];
    $u->feature_hook = [TextValidationFeatureHook::class, 'call'];
    $u->feature_init = [TextValidationFeatureInit::class, 'call'];
    $u->fetcher = [TextValidationFetcher::class, 'call'];
    $u->make_fetch_def = [TextValidationMakeFetchDef::class, 'call'];
    $u->make_context = [TextValidationMakeContext::class, 'call'];
    $u->make_options = [TextValidationMakeOptions::class, 'call'];
    $u->make_request = [TextValidationMakeRequest::class, 'call'];
    $u->make_response = [TextValidationMakeResponse::class, 'call'];
    $u->make_result = [TextValidationMakeResult::class, 'call'];
    $u->make_point = [TextValidationMakePoint::class, 'call'];
    $u->make_spec = [TextValidationMakeSpec::class, 'call'];
    $u->make_url = [TextValidationMakeUrl::class, 'call'];
    $u->param = [TextValidationParam::class, 'call'];
    $u->prepare_auth = [TextValidationPrepareAuth::class, 'call'];
    $u->prepare_body = [TextValidationPrepareBody::class, 'call'];
    $u->prepare_headers = [TextValidationPrepareHeaders::class, 'call'];
    $u->prepare_method = [TextValidationPrepareMethod::class, 'call'];
    $u->prepare_params = [TextValidationPrepareParams::class, 'call'];
    $u->prepare_path = [TextValidationPreparePath::class, 'call'];
    $u->prepare_query = [TextValidationPrepareQuery::class, 'call'];
    $u->result_basic = [TextValidationResultBasic::class, 'call'];
    $u->result_body = [TextValidationResultBody::class, 'call'];
    $u->result_headers = [TextValidationResultHeaders::class, 'call'];
    $u->transform_request = [TextValidationTransformRequest::class, 'call'];
    $u->transform_response = [TextValidationTransformResponse::class, 'call'];
});
