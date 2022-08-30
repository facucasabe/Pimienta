const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3001,
  dbUser: process.env.DB_USER || 'pimienta',
  dbPassword: process.env.DB_PASSWORD || 'pass',
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT || 5432,
  dbName: process.env.DB_NAME || 'pimientadb'
}

module.exports = { config }
