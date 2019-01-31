/**
 * @class ThePassword
 */
'use strict'

const abind = require('abind')
const crypto = require('crypto')

/** @lends ThePassword */
class ThePassword {
  constructor(options = {}) {
    const { algorithm = 'sha1' } = options
    this.algorithm = algorithm
    abind(this)
  }

  digest(password, salt) {
    return crypto
      .createHmac(this.algorithm, salt)
      .update(String(password))
      .digest('hex')
      .toString()
  }

  generatePassword() {
    return crypto.randomBytes(6).toString('base64')
  }

  generateSalt() {
    return crypto.randomBytes(32).toString('base64')
  }
}

module.exports = ThePassword
