import { Router } from 'express'
import { createValidator } from 'express-joi-validation'

const validator = createValidator()

import { UserController } from '../controllers/UserController'
import { roleSchema } from '../entities/schema/role-schema'
import { userSchema } from '../entities/schema/user-schema'

const userRoutes = Router()
const userController = new UserController()

userRoutes.post('/new/role', validator.body(roleSchema), userController.createRole)
userRoutes.post('/new', validator.body(userSchema), userController.create)

export { userRoutes }
