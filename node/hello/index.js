const express = require('express')

const app = express()

app.all('*', (req, res) => {
  res.json({ ok: true })
})

app.listen(3000, () => {
  console.log('localhost 3000')
})
