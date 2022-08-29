const express = require('express')

const cors = require('cors')

const routerApi = require('./routes')

const app = express()

const PORT = process.env.PORT

app.use(express.json())

const whitelist = ['http://localhost:5173', 'http://localhost:3000']

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

routerApi(app)

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`)
})
