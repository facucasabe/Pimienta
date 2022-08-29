const express = require('express')
const routerApi = require('./routes')
const { errorHandler, logErrors } = require('./middlewares/error.handler')

const app = express();

const port = 3001

app.use(express.json())
routerApi(app)

app.use(logErrors)
app.use(errorHandler)


app.listen(port, () => {
  console.log('Corriendo en puerto ' + port)
})
