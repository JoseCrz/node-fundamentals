const fs = require('fs')
const stream = require('stream')
const util = require('util')

let data = ''

let readableStream = fs.createReadStream(__dirname + '/lorem.txt') //declare data origin

readableStream.setEncoding('UTF8')

// * Example of readableStream
// readableStream.on('data', chunck => {
//     // console.log(chunck)
//     data += chunck
// })

// readableStream.on('end', () => {
//     console.log(data)
// })

const Transform = stream.Transform //creates a transform stream that can both read & write

function Mayus() { //creates a constructor function
    console.log(this)
    Transform.call(this)
}
util.inherits(Mayus, Transform) //Mayus inherits from Tranform

Mayus.prototype._transform = function (chunk, codification, callback) { //now that mayus has Transform methods, we redefined the _transform function
    let chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    callback()
}

let mayus = new Mayus()

readableStream
    .pipe(mayus)
    .pipe(process.stdout)