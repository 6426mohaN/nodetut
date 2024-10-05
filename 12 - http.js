const http = require('http')

const server = http.createServer((req,res)=>{


    if(req.url === '/'){
        res.end('hello wrld')
    }

    if(req.url === '/about'){
        res.end('About page')
    }
res.end(`
    <h1>OOPS couldn't find the page you are looking for</h1>
    <a href="/">Go Home</a>
    `)

})

server.listen(5000)