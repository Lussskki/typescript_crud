import type { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { User } from "../models/user.ts"  

dotenv.config()

export const signupController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body

    // 1. Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" })
    }

    // 2. Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // 3. Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    })
    await newUser.save()

    // 4. Create JWT token
    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET || "lukaluka",
      { expiresIn: "1h" }
    )

    // 5. Send response
    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      },
      token
    })
  } catch (error) {
    return res.status(500).json({ message: "Server error", error })
  }
}
