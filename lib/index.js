/**
 * Password util for the-framework
 * @module the-password
 */
'use strict'

const ThePassword = require('./ThePassword')
const create = require('./create')

const lib = create.bind(this)

Object.assign(lib, {
  ThePassword,
  create
})

module.exports = lib
