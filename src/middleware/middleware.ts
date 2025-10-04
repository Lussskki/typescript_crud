import type { Request, Response, NextFunction } from "express"
import jwt, { type JwtPayload } from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

interface AuthRequest extends Request {
  user?: string | JwtPayload
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1]
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided" })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "lukaluka")
    req.user = decoded
    next()
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" })
  }
}
