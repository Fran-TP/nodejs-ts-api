import express from 'express'

const app = express()

// middleware
app.use(express.json())

// disable powered by express
app.disable('x-powered-by')

app.get('/ping', (_req, res) => {
  res.send('someone pinged here!!')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
