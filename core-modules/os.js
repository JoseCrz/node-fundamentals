// ? Basic example of some os module methods

const os = require('os')

console.log(os.arch())
console.log(os.platform())
console.table(os.cpus())
console.log(os.freemem())
console.log(os.totalmem())
console.log(os.homedir())
console.log(os.networkInterfaces())
console.log(os.hostname())