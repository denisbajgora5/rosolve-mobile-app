import express from 'express'
import Passenger from '../models/Passenger'

const router = express.Router()

// Simple numeric ID counter (replace with a real counter in production)
let nextPassengerId = 1

router.post('/register', async (req, res) => {
  console.log(req.body);
  try {
    const {
      phoneNumber,
      firstName,
      lastName,
      email,
    } = req.body

    const newPassenger = new Passenger({
      _id: nextPassengerId++, // Numeric ID instead of ObjectId
      phoneNumber,
      firstName,
      lastName,
      email,
      pfp: "None",
      createdAt: new Date(),
      updatedAt: new Date(),
      rating: 5, // or whatever default you want
    })

    await newPassenger.save()

    res.status(201).json({ message: 'Passenger registered successfully' })
  } catch (err) {
    console.error('❌ Registration Error:', err)
    res.status(500).json({ error: 'Failed to register passenger' })
  }
})

export default router
