const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.json({ result: true, message: 'blog.me-idea.in.th'})
})

app.get('/env', (req, res) => {
  const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID
  const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET
  const message = {
    FACEBOOK_APP_ID,
    FACEBOOK_APP_SECRET
  }

  res.json({ result: true, message })
})

app.listen(PORT, () => {
  console.log(`Start on port: ${PORT}`)
})
