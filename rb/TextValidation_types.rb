# frozen_string_literal: true

# Typed models for the TextValidation SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Validation entity data model.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
Validation = Struct.new(
  :data,
  :message,
  :success,
  keyword_init: true
)

# Match filter for Validation#load (any subset of Validation fields).
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
ValidationLoadMatch = Struct.new(
  :data,
  :message,
  :success,
  keyword_init: true
)

