const http = require('node:http')
const fs = require('node:fs')
const port = 3000

const servidor = http.createServer((request, response) => {
  console.log('request recived: ' + request.url)

  response.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (request.url === '/') {
  response.write(`<h1>Pagina Principal</h1>`)
  response.end()
  } else if (request.url === '/acerca_de') {
    response.end(`<h1>Hola Mundo ${request.url}</h1>`)
  } else if(request.url == '/imagen.png'){
    fs.readFile('./images/goku.png', (err, file) => {
      if(err){
        response.statusCode = 500
        response.end(`<h1>No se ha podido cargar el archivo</h1>`)
      }
      response.setHeader('Content-Type', 'image/png')
      response.statusCode = 200
      response.end(file)
    })
  } else {
    response.end('<h1>Pagina no encontrada</h1>')
  }
})


servidor.listen(port, () => {
  console.log(`servidor listro en el puerto http://localhost:${port}/`)
})

