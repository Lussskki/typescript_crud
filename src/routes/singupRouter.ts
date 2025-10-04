import { Router } from 'express'

import { signupController } from '../controllers/signupController.ts'

const singupRouter = Router()

singupRouter.post('/signup', signupController)

export default singupRouter