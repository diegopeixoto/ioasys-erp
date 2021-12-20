import { Response } from 'express'
import { ValidatedRequest } from 'express-joi-validation'

import { RoleRequestSchema } from '../entities/schema/role-schema'
import { UserRequestSchema } from '../entities/schema/user-schema'
import { RoleService } from '../services/RoleService'
import { UserService } from '../services/UserService'
import { Validator } from '../utils/validator.utils'

class UserController {
    async createRole(req: ValidatedRequest<RoleRequestSchema>, res: Response): Promise<Response> {
        const roleService = new RoleService()
        const validator = new Validator()

        try {
            validator.header(req.headers)
            const role = await roleService.create(req.body)
            return res.status(202).json(role)
        } catch (err) {
            return res.status(400).json({ message: err })
        }
    }
    async create(req: ValidatedRequest<UserRequestSchema>, res: Response): Promise<Response> {
        const userService = new UserService()
        const validator = new Validator()

        try {
            validator.header(req.headers)
            const { password, ...user } = await userService.create(req.body)
            return res.status(202).json(user)
        } catch (err) {
            return res.status(400).json({ message: err })
        }
    }
}

export { UserController }
