/* const express = require('express') //importamos express
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) */

const Server = require('./models/server');

const server = new Server()

server.listen()