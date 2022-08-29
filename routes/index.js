const usersRouter = require('./users.router')
const express = require('express')

function routerApi(app) {
  // const router = express.Router()
  // app.use('/pimienta/v1', router)
  app.use('/users', usersRouter)
}

module.exports = routerApi;
