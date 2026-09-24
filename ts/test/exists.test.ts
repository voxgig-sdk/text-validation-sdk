
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TextValidationSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = TextValidationSDK.test()
    equal(testsdk instanceof TextValidationSDK, true,
      'TextValidationSDK.test() must return a client synchronously')
  })

})
