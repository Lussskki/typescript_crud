import { Router } from 'express'
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.ts"

const userRouter = Router()

// CRUD routes
userRouter.get("/", getUsers)       // GET all users
userRouter.get("/:id", getUser)     // GET single user by ID
userRouter.post("/", createUser)    // POST create new user
userRouter.put("/:id", updateUser)  // PUT update user
userRouter.delete("/:id", deleteUser) // DELETE user

export default userRouter