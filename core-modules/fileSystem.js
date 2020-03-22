// ? Basic examples of node's fs core module

const fs = require('fs')

// * Read
const readFile = path => {
    fs.readFile(path, (error, data) => {
        if (error) {
            console.error('Error: ', error)
        } else {
            console.log(data.toString())
        }
    })
}

readFile(__dirname + '/file.txt', )

// * Write

const writeFile = (path, content) => {
    fs.writeFile(path, content, error => {
        if (error) {
            console.error('Error: ', error)
        } else {
            console.log('File created!')
        }
    })
}

writeFile(__dirname + '/createdFile.txt', 'I\'m a created file!')

// * Delete
const deleteFile = path => {
    fs.unlink(path, error => {
        if (error) {
            console.error('Error: ', error)
        } else {
            console.log('File deleted!')
        }
    })
}

deleteFile(__dirname + '/fileToDelete.txt')