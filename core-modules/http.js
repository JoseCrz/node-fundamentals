// ? Example on how to create a bare bone http server using Node's HTTP native module

const http = require('http')

const port = 3000 //port from which the server it's going to listen
const router = (request, response) => { // handles the requests and sends a different response depeding on the url
    console.log('We got a a request from:', request.url)
    
    response.writeHead(201, {'Content-Type': 'text/plain'}) // sets the header
    
    switch (request.url) {
        case '/':
            response.write('Welcome to this basic HTTP Server')
            break
        case '/hello':
            response.write('Hello there!')
            break
        case 'goodbye':
            response.write('I dont\'t know why you say goodbye and I say hello')
            break
        default:
            response.write('Could not find what you were looking for...')
            break
    }
    response.end()
}

http.createServer(router).listen(port) //creates the server using our previously defined router

console.log(`listening on port: ${port}`)