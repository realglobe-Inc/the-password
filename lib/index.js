/**
 * Password util for the-framework
 * @module the-password
 */
'use strict'

const _d = (m) => 'default' in m ? m.default : m

const ThePassword = _d(require('./ThePassword'))
const create = _d(require('./create'))

module.exports = {
  ThePassword,
  create,
  default: create,
}
