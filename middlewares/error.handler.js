function logErrors(err, req, res, next) {
  next(err)
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    status: err.output,
    message: err.message,
    stack: err.stack,
  })
}


module.exports = { logErrors, errorHandler }
