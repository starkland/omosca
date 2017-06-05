var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SENTRY_CONFIG: '"https://87875b8c7a3a4f4bbaf24aefac89ae3d@sentry.io/176198"',
  ADMIN_ID_1: '"Zlc63LFcG6WXs2uJ2u7OgiR0Y6A3"',
  ADMIN_ID_2: '"m4VZhhWnF0R8DPQduhX1byUa2KH3"',
})
