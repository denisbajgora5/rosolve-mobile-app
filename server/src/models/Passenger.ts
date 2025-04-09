import mongoose from 'mongoose'

const passengerSchema = new mongoose.Schema({
  _id: Number, 
  phoneNumber: String,
  firstName: String,
  lastName: String,
  email: String,
  pfp: String,
  createdAt: Date,
  updatedAt: Date,
  rating: Number,
})

const Passenger = mongoose.model('Passenger', passengerSchema)

export default Passenger
