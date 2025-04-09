// server/src/models/Driver.ts
import mongoose from 'mongoose'

const driverSchema = new mongoose.Schema(
  {
    driverLicense: String,
    phoneNumber: String,
    firstName: String,
    lastName: String,
    email: String,
    pfp: String,
    taxiNumber: String,
    rating: {
      type: Number,
      default: 5,
    },
  },
  { timestamps: true }
)

const Driver = mongoose.model('Driver', driverSchema)
export default Driver
