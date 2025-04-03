import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3001

app.use(cors({ origin: 'http://localhost:19006' })) // only allow Expo Web

app.get('/api/value', (req, res) => {
  res.json({ value: 'Express Server Status: WORKING!' })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
