const express = require('express')
const routerApi = require('./routes')
const cors = require('cors');
const { errorHandler, logErrors } = require('./middlewares/error.handler')

const app = express();

const port = 3001


app.use(express.json())

const whitelist = ['http://localhost:3000'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

routerApi(app)

app.use(logErrors)
app.use(errorHandler)


app.listen(port, () => {
  console.log('Corriendo en puerto ' + port)
})
