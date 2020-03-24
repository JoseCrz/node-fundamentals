const sharp = require('sharp')

sharp('./img/gomez.jpg')
    .flip(true)
    .toFile('flipped.jpg', (err) => {
        if (err) {
            console.error(err)
        }
    })