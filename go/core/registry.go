package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewValidationEntityFunc func(client *TextValidationSDK, entopts map[string]any) TextValidationEntity

