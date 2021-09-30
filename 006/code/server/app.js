const express = require('express');
const app = express();
const port = 9000;

app.get('/form', (req, res) => {
  console.info(req.query)
  res.send({message: "ok"}).status(200).end()
});

app.post('/form', (req, res) => {
  console.info(req)
  res.send({message: "ok"}).status(200).end()
});

app.listen(port, () => {
  console.log(`App: http://localhost:${port}`)
});