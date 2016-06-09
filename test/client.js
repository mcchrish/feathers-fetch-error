const feathers = require('feathers/client')
const rest = require('feathers-rest/client')
const localstorage = require('feathers-localstorage')
const storage = require('localstorage-memory')
const hooks = require('feathers-hooks')
const authentication = require('feathers-authentication/client')
const fetch = require('node-fetch')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3030

const app = feathers()
  .configure(rest(`http://${host}:${port}`).fetch(fetch))
  .configure(hooks())
  .use('storage', localstorage({ storage }))
  .configure(authentication())

module.exports = app
