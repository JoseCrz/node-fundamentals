const bcrypt = require('bcrypt')
const password = 'mimibebe2020'

const encrypt = async password => {
    const encrypted = await bcrypt.hash(password, 5)
    console.log(encrypted)
    console.log(await bcrypt.compare(password, encrypted))
}

encrypt(password)

