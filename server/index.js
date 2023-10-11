// vamos a levantar el servidor

const server = require("./src/server")
const {conn} = require("./src/db")

//establecemos en que puerto se debe levantar el servidor.

const PORT = 1027

server.listen( PORT, ()=>{
  conn.sync({force: true})
  console.log(`Listening on port ${PORT}`)
})
