import express from 'express';
import https from 'https';
import fs from 'fs';
const key = fs.readFileSync('./certs/localhost+1-key.pem');
const cert = fs.readFileSync('./certs/localhost+1.pem');
const app = express()
const server = https.createServer({ key: key, cert: cert }, app);
import { router } from './src/routes/routes'
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//API ROUTES
app.use('/api', router);

server.listen(port, () => {
  console.log(`Example app listening on https://localhost:${port}`)
})

export { app }
