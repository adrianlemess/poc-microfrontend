const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname
    const jsHeader = {
        'Content-Type': 'application/javascript'
    }

    const cssHeader = {
        'Content-Type': 'text/css'
    }
    switch (pathname) {
        case '/dist/counter.umd.min.js':
            res.writeHead(200, jsHeader)
            console.log('counter.umd.min.js');

            return fs.createReadStream('./dist/counter.umd.min.js').pipe(res)
        case '/dist/counter.common.js':
            res.writeHead(200, jsHeader)
            console.log('counter.common.js');

            return fs.createReadStream('./dist/counter.common.js').pipe(res)
        case '/dist/counter.css':
            res.writeHead(200, cssHeader)
            console.log('counter.css');

            return fs.createReadStream('./dist/counter.css').pipe(res)
        default:
            res.writeHead(200, {
                'Content-Type': 'text/html',
                'Link': `<http://localhost:5000/dist/counter.css>; rel="stylesheet",` +
                    `<http://localhost:5000/dist/counter.umd.min.js>; rel="fragment-script",` +
                    `<http://localhost:5000/dist/counter.common.js>; rel="fragment-script"`
            })
            return res.end('')
    }
})

server.listen(5000, () => {
    console.log('SPA Fragment Server started at 5000')
})