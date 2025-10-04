import { Router } from "express"
import { loginController } from "../controllers/loginController.ts"

const loginRouter = Router()


loginRouter.post('/login', loginController)

export default loginRouter

