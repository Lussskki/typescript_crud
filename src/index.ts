import express, { type Application } from "express"
// import userRouter from "./routes/userRouter.ts"
import singupRouter from "./routes/singupRouter.ts"
import loginRouter from "./routes/loginRouter.ts"

import { connectDB } from "./database/mongoose.ts"
connectDB()

const app : Application = express()

app.use(express.json())
// app.use('/api', userRouter)
app.use('/api', singupRouter)
app.use('/api', loginRouter)

app.listen(3000, () => {
    console.log('running 3000')
})