/**
 * Test for ThePassword.
 * Runs with mocha.
 */
'use strict'

const ThePassword = require('../lib/ThePassword')
const { ok, equal } = require('assert')

describe('the-password', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    ok(ThePassword)

    const { generateSalt, generatePassword, digest } = new ThePassword()

    const salt = generateSalt()
    const password = generatePassword()
    console.time('digest')
    const hash = digest(password, salt)
    console.timeEnd('digest')
    ok(hash)
    equal(digest(password, salt), digest(password, salt))
  })
})

/* global describe, before, after, it */
