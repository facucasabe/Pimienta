const bcrypt = require('bcrypt')

async function hashPass() {
  const password = 'facundo'
  const hash = await bcrypt.hash(password, 10)
  console.log(hash)
  verifyPass(password, hash)
}

async function verifyPass(password, hash) {
  const verify = await bcrypt.compare(password, hash)
  console.log(verify)
}

hashPass()

