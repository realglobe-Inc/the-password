/**
 * Password util for the-framework
 * @module the-password
 */
'use strict'

const ThePassword = require('./ThePassword')
const create = require('./create')

const lib = create.bind(this)

const instance = lib()

Object.assign(lib, {
  ThePassword,
  create,
  instance
})

module.exports = lib
