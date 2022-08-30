const { database } = require('faker/lib/locales/en')
const { Client } = require('pg')

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'pimienta',
    password: 'pass',
    database: 'pimientadb'
  })
  await client.connect()
  return client
}

module.exports = getConnection
