// ? Example on how to use console.time() to see how much time some piece of code takes to execute

// * sync

console.time('for')
let sum = 0
for (let i = 0; i < 1000000000; i++) {
    sum++
}
console.timeEnd('for')

// * async

function asyncro () {
    return new Promise(resolve => {
        setTimeout(() => {
            // console.log('async end')
            resolve()
        })
    })
}

console.time('async')
asyncro()
    .then(() => {
        console.timeEnd('async')
    })