import express from 'express'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'

import connectDB from './config/db'
import driverRoutes from './routes/driver'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const app = express()
const PORT = process.env.EXPRESS_SERVER_PORT || 5001

app.use(cors({ origin: '*' })) // 可以改成允许所有或你 Expo 的地址
app.use(express.json()) // 👈 支持 JSON 请求体

connectDB() // ✅ 初始化数据库连接

// 测试接口
app.get('/api/value', (req, res) => {
  res.json({ value: 'Express Server Status: WORKING!' })
})

// 注册司机路由
app.use('/api/driver', driverRoutes)

app.listen(PORT, () => {
  console.log(`✅ Server running at http://10.156.26.90:${PORT}`)
})
