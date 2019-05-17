const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname
  const jsHeader = { 'Content-Type': 'application/javascript' }
  switch(pathname) {
    case '/public/bundleReact.js':
      res.writeHead(200, jsHeader)
      console.log('bundleReact');
      
      return fs.createReadStream('./public/bundleReact.js').pipe(res)
    default:
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Link': '<http://localhost:4200/public/bundleReact.js>; rel="fragment-script"'
      })
      return res.end('')
  }
})

server.listen(4200, () => {
  console.log('SPA Fragment Server started at 4200')
})
