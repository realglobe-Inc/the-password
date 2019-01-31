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

  digest(password, salt, options = {}) {
    const { stretching = 1 } = options
    if (stretching === 1) {
      console.warn('[the-password] Should set stretching option for safety')
    }
    let hashed = password
    let count = stretching > 0 ? stretching : 1
    while (count--) {
      hashed = this._digest(hashed, salt)
    }
    return hashed
  }

  generatePassword() {
    return crypto.randomBytes(6).toString('base64')
  }

  generateSalt() {
    return crypto.randomBytes(32).toString('base64')
  }

  _digest(key, salt) {
    return crypto
      .createHmac(this.algorithm, salt)
      .update(String(key))
      .digest('hex')
      .toString()
  }
}

module.exports = ThePassword
