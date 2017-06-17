const bcrypt = require('bcryptjs')

const salt = bcrypt.genSaltSync(10)

console.log(salt)

const hash = bcrypt.hashSync('123', "inventorymanage")

console.log(hash)