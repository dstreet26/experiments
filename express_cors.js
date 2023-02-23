//todo: proxy cs
const data = { foo: 'bar' }

const express = require('express')

const app = express()

const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.json(data)
})

app.listen(4001, () => {
  console.log('express server with CORS listening...')
})
