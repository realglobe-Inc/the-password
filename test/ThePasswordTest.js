/**
 * Test for ThePassword.
 * Runs with mocha.
 */
'use strict'

const ThePassword = require('../lib/ThePassword')
const {ok, equal} = require('assert')

describe('the-password', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    ok(ThePassword)

    const {generateSalt, generatePassword, digest} = new ThePassword()

    const salt = generateSalt()
    const password = generatePassword()
    ok(digest(password, salt))
    equal(digest(password, salt), digest(password, salt))
  })
})

/* global describe, before, after, it */
