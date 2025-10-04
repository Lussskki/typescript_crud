import type { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { User } from "../models/user.ts"

dotenv.config()

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const existingUser = await User.findOne({ email })
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid email or password" })
    }

    const isMatch = await bcrypt.compare(password, existingUser.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" })
    }

    const token = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_SECRET || "lukaluka",
      { expiresIn: "1h" }
    )

    return res.json({
      message: "Login successful",
      user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email
      },
      token
    })
  } catch (error: any) {
    return res.status(500).json({ message: "Server error", error: error.message || error })
  }
}
