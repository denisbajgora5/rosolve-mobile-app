// server/src/config/db.ts
import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://admin:password@10.156.26.109:27017/taxi')

    console.log('✅ MongoDB connected')
  } catch (err) {
    console.error('❌ MongoDB connection error:', err)
    process.exit(1)
  }
}

export default connectDB
