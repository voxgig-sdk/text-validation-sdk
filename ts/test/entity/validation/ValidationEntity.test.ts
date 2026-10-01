

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TextValidationSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ValidationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TEXT_VALIDATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('TEXT_VALIDATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TextValidationSDK.test()
    const ent = testsdk.Validation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TEXT_VALIDATION_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'validation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"text":{"a":true,"h":"Text","n":"text","r":false,"t":"`$STRING`","key$":"text","index$":0}},"name":"validation","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/search/ringtone","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"sample text","k":"query","n":"text","or":"text","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/search/ringtone","q":{"exist":["text"]},"r":{},"s":[{"lit":"api"},{"lit":"search"},{"lit":"ringtone"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"validation","name__orig":"validation","Name":"Validation","name_":"validation","name-":"validation","NAME":"VALIDATION","index$":0}, {"active":true,"entity":"validation","key$":"BasicValidationFlow","kind":"basic","name":"BasicValidationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"validation_ref01","srcdatavar":"validation_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-validation_ref01"}}],"index$":0}]}, 'Validation', {"GET /api/search/ringtone":{"protocol":"http","parameters":[{"name":"text","in":"query","description":"The text string to validate. Must not be empty.","required":true,"schema":{"type":"string","minLength":1},"example":"sample text","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let validation_ref01_data = Object.values(setup.data.existing.validation)[0] as any

    // LOAD
    const validation_ref01_ent = client.Validation()
    const validation_ref01_match_dt0: any = {}
    const validation_ref01_data_dt0 = (await validation_ref01_ent.load(validation_ref01_match_dt0)).data()
    assert(null != validation_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/validation/ValidationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = TextValidationSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['validation01','validation02','validation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TEXT_VALIDATION_TEST_VALIDATION_ENTID': idmap,
    'TEXT_VALIDATION_TEST_LIVE': 'FALSE',
    'TEXT_VALIDATION_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['TEXT_VALIDATION_TEST_VALIDATION_ENTID']

  const live = 'TRUE' === env.TEXT_VALIDATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TEXT_VALIDATION_TEST_VALIDATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TextValidationSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.TEXT_VALIDATION_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
