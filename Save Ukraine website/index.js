const http = require('http')
const fs = require('fs')
const port = 3000
try {
    const content = await fs.readFile('foo.bar', 'utf-8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('File not found!');
    } else {
      throw err;
    }
  }

const server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index3.html', function(error,data) {
        if (error){
            res.writeHead(404)
            res.write('Error: File Not Found')
        }else {
            res.write(data)
        }
        res.end()
        
    })
   // res.write("Hello world")
   // res.end()
    
})

server.listen(port, function(error) {
      if(error) {
        console.log('Something went wrong', error)
      }else {
          console.log('Server is listening on port' + port)
      }
})