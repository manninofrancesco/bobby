const express = require('express')
const https = require('https');
const fs = require('fs');
const key = fs.readFileSync('./certs/localhost+1-key.pem');
const cert = fs.readFileSync('./certs/localhost+1.pem');
const app = express()
const server = https.createServer({key: key, cert: cert }, app);

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(port, () => {
  console.log(`Example app listening on https://localhost:${port}`)
})
