import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const PORT = process.env.EXPRESS_SERVER_PORT;

app.use(cors({ origin: 'http://localhost:19006' })) // only allow Expo Web

app.get('/api/value', (req, res) => {
  res.json({ value: 'Express Server Status: WORKING!' })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
