/**
 * @class ThePassword
 */
'use strict'

const abind = require('abind')
const crypto = require('crypto')

/** @lends ThePassword */
class ThePassword {
  constructor (options = {}) {
    const {algorithm = 'sha1'} = options
    const s = this
    s.algorithm = algorithm
    abind(s)
  }

  generateSalt () {
    return crypto.randomBytes(32).toString('base64')
  }

  generatePassword () {
    return crypto.randomBytes(6).toString('base64')
  }

  digest (password, salt) {
    const s = this
    crypto.createHmac(s.algorithm, salt).update(String(password)).digest('hex').toString()
  }
}

module.exports = ThePassword
