const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname
  const jsHeader = {
    'Content-Type': 'application/javascript'
  }
  switch (pathname) {
    case '/dist/0.js':
      res.writeHead(200, jsHeader)

      return fs.createReadStream('./dist/0.js').pipe(res)
    case '/dist/1.js':
      res.writeHead(200, jsHeader)

      return fs.createReadStream('./dist/1.js').pipe(res)
    case '/dist/main.js':
      res.writeHead(200, jsHeader)

      return fs.createReadStream('./dist/main.js').pipe(res)
    case '/dist/polyfills.js':
      res.writeHead(200, jsHeader)

      return fs.createReadStream('./dist/polyfills.js').pipe(res)
    default:
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Link': `<http://localhost:4000/dist/0.js>; rel="fragment-script",` +
        `<http://localhost:4000/dist/1.js>; rel="fragment-script",` +
        `<http://localhost:4000/dist/main.js>; rel="fragment-script",` +
        `<http://localhost:4000/dist/polyfills.js>; rel="fragment-script"`
      })
      return res.end('')
  }
})

server.listen(4000, () => {
  console.log('SPA Fragment Server started at 4000')
})
