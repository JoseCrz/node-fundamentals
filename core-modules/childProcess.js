//  ? Examples on how to use child_process native module

const { exec, spawn } = require('child_process')

// * SECTION exec
// exec allows to execute commands from within node

exec('node core-modules/console.js', (error, stdout, stderr) => {
    if (error) {
        console.log('There\'s a problem...')
        console.error(error)
        return false
    }

    console.log(stdout)
})

// * SECTION spawn
// spawn allows to spawn processes for more complex tasks
let aProcess = spawn('ls', ['-lha'])
console.log(aProcess)
console.log('Process ID: ', aProcess.pid)

aProcess.stdout.on('data', data => {
    console.log(data.toString())
})