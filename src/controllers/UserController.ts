import { Response } from 'express'
import { ValidatedRequest } from 'express-joi-validation'
import createError from 'http-errors'
import jwt from 'jsonwebtoken'

import { RoleRequestSchema } from '../entities/schema/role-schema'
import { LoginRequestSchema, UserRequestSchema } from '../entities/schema/user-schema'
import { RoleService } from '../services/RoleService'
import { _isValidPassword, UserService } from '../services/UserService'
import { Validator } from '../utils/validator.utils'

const userService = new UserService()
const roleService = new RoleService()
const validator = new Validator()

class UserController {
    async createRole(req: ValidatedRequest<RoleRequestSchema>, res: Response): Promise<Response> {
        try {
            validator.header(req.headers)
            const role = await roleService.create(req.body)
            return res.status(202).json(role)
        } catch (err) {
            return res.status(400).json({ message: err })
        }
    }
    async create(req: ValidatedRequest<UserRequestSchema>, res: Response): Promise<Response> {
        try {
            validator.header(req.headers)
            const { password, ...user } = await userService.create(req.body)
            return res.status(202).json(user)
        } catch (err) {
            return res.status(400).json({ message: err })
        }
    }

    async login(req: ValidatedRequest<LoginRequestSchema>, res: Response): Promise<Response> {
        const { username, password } = req.body

        try {
            validator.header(req.headers)
            const user = await userService.findOne({ username })
            if (user) {
                if (_isValidPassword(username, password)) {
                    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: 1600 })
                    const { password, ...data } = user

                    res.status(200).json({ user: data, access_token: token })
                } else {
                    createError(401, 'Invalid User or Password.')
                }
            } else {
                createError(401, 'Invalid User or Password.')
            }
            return res.status(202).json()
        } catch (err) {
            return res.status(400).json({ message: err })
        }
    }
}

export { UserController }
