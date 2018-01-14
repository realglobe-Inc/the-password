'use strict'

const thePassword = require('the-password').default

async function tryExample () {
  const {generateSalt, generatePassword, digest} = thePassword()

  const salt = generateSalt()
  const password = generatePassword()

  const passwordHash = digest(password, salt)
  /* ... */

}

tryExample().catch((err) => console.error(err))
