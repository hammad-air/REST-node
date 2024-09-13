const express = require('express')
// const mongoose = require('mongoose');
const data = require("./MOCK_DATA.json")
const app = express()
const port = 3000;

app.get('/api/users', (req, res) => {
  return res.send(data)
})

app.get('/users', (req, res) => {
 const HTML=  `<ul>${data.map((data)=> `<li>${data.email}</li>`).join("")}</ul>`

  return res.send(HTML)
})

app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const user = data.find(user => user.id === parseInt(id));
  return res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})