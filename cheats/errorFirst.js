// ? Error First Callback is a design pattern that helps us to handle errors in async functions

const asynco = (callback) => {
    setTimeout(() => {
        try {
            let a = 5 + x
            callback(null, a)
        } catch (error) {
            callback(error)
        }
    })
}

asynco((error, data) => {
    if (error) {
        console.error('we have an error', error)
        return false
    }

    console.log('all is good')
})