package voxgigtextvalidationsdk

import (
	"github.com/voxgig-sdk/text-validation-sdk/go/core"
	"github.com/voxgig-sdk/text-validation-sdk/go/entity"
	"github.com/voxgig-sdk/text-validation-sdk/go/feature"
	_ "github.com/voxgig-sdk/text-validation-sdk/go/utility"
)

// Type aliases preserve external API.
type TextValidationSDK = core.TextValidationSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type TextValidationEntity = core.TextValidationEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type TextValidationError = core.TextValidationError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewValidationEntityFunc = func(client *core.TextValidationSDK, entopts map[string]any) core.TextValidationEntity {
		return entity.NewValidationEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewTextValidationSDK = core.NewTextValidationSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
