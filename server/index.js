// vamos a levantar el servidor

const server = require("./src/server")

//establecemos en que puerto se debe levantar el servidor

const PORT = 8080

server.listen( PORT, ()=>{
  console.log(`Listening on port ${PORT}`)
})
