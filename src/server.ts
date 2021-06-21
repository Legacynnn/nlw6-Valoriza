import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({Server: "Server is running correctly"})
})

app.post('/test/post', (req, res) => {
  res.json({Server: "Hello nlw"})
})

app.listen(3000, () => {
  console.log("Server is running in port 3000")
})