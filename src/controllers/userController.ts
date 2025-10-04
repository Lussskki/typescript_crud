// import type { Request, Response } from "express"
// import type { User } from "../models/user.js"

// // temporary in-memory DB
// let users: User[] = []
// let idCounter = 1

// // GET /api/users
// export const getUsers = (req: Request, res: Response): void => {
//   res.json(users)
// }

// // GET /api/users/:id
// export const getUser = (req: Request, res: Response): void => {
//   const id = Number(req.params.id)
//   const user = users.find(u => u.id === id)

//   if (!user) {
//     res.status(404).json({ message: "User not found" })
//     return
//   }

//   res.json(user)
// }

// // POST /api/users
// export const createUser = (req: Request, res: Response): void => {
//   const { name, email } = req.body

//   if (!name || !email) {
//     res.status(400).json({ message: "Name and email are required" })
//     return
//   }

//   const newUser: User = {
//     id: idCounter++,
//     name,
//     email,
//   }

//   users.push(newUser)
//   res.status(201).json(newUser)
// }

// // PUT /api/users/:id
// export const updateUser = (req: Request, res: Response): void => {
//   const id = Number(req.params.id)
//   const { name, email } = req.body

//   const user = users.find(u => u.id === id)
//   if (!user) {
//     res.status(404).json({ message: "User not found" })
//     return
//   }

//   // update fields only if provided
//   user.name = name ?? user.name
//   user.email = email ?? user.email

//   res.json(user)
// }

// // DELETE /api/users/:id
// export const deleteUser = (req: Request, res: Response): void => {
//   const id = Number(req.params.id)
//   const index = users.findIndex(u => u.id === id)

//   if (index === -1) {
//     res.status(404).json({ message: "User not found" })
//     return
//   }

//   users.splice(index, 1)
//   res.json({ message: "User deleted successfully" })
// }
