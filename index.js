require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send("nitesh eklare")
})

app.get('/login', (req,res) => {
    res.send('<h1>Please login in app</h1>')
})

app.get('/Youtube', (req,res) => {
    res.send('<h2>Welcom to my Youtube Channel</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})