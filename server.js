const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'express/index.html'))
})

app.use('/assets', express.static(path.join(__dirname, './express/assets')))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})