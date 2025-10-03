import express, { type Application } from "express"
import userRouter from "./routes/userRouter.ts"


const app : Application = express()

app.use(express.json())
app.use('/api', userRouter)

app.listen(3000, () => {
    console.log('running 3000')
})