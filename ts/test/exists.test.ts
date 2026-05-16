
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TextValidationSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await TextValidationSDK.test()
    equal(null !== testsdk, true)
  })

})
