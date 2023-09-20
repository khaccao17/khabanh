const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3001
const server = http.createServer((req, res) => {
   if (req.url === '/') {
      fs.readFile('index.html', (err, data) => {
         if (err) 
            console.error(err)
         else 
            res.end(data)
      })
   } else if (req.url === '/eat') {
      fs.readFile('eat.html', (err, data) => {
         if (err)
            console.error(err)
         else
            res.end(data)
      })
   } else if (req.url === '/login') {
      fs.readFile('login.html', (err, data) => {
         if (err)
            console.error(err)
         else
            res.end(data)
      })
   } else {
     res.write('<h1>404 - Not Found</h1>')
     res.end() 
   }
})
server.listen(port, () => {
   console.log("http://localhost:" + port)
})