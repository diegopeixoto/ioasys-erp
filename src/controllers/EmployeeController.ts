import { Request, Response } from 'express'
import { ValidatedRequest } from 'express-joi-validation'
import createError from 'http-errors'
import jwt from 'jsonwebtoken'

import { EmployeeRequestSchema } from '../entities/schema/employee-schema'
import { OccupationRequestSchema } from '../entities/schema/occupation-schema'
import { EmployeeService } from '../services/EmployeeService'
import { OccupationService } from '../services/OccupationService'
import { Validator } from '../utils/validator.utils'

const occupationService = new OccupationService()
const employeeService = new EmployeeService()
const validator = new Validator()

class EmployeeController {
    async createOccupation(
        req: ValidatedRequest<OccupationRequestSchema>,
        res: Response
    ): Promise<Response> {
        try {
            validator.header(req.headers)
            const decodedToken = jwt.verify(
                req.headers.authorization.replace(/^Bearer\s+/, ''),
                process.env.JWT_SECRET
            )
            if (decodedToken.user.role !== 'ADMIN') {
                throw createError(403, 'Insufficient Privilege')
            }
            const occupation = await occupationService.create(req.body)
            return res.status(202).json(occupation)
        } catch (err) {
            return res.status(400).json({ message: err })
        }
    }

    async allOccupation(req: Request, res: Response): Promise<Response> {
        try {
            validator.header(req.headers)
            const decodedToken = jwt.verify(
                req.headers.authorization.replace(/^Bearer\s+/, ''),
                process.env.JWT_SECRET
            )
            if (decodedToken.user.role !== 'ADMIN') {
                throw createError(403, 'Insufficient Privilege')
            }
            const occupation = await occupationService.findAll()
            return res.status(200).json(occupation)
        } catch (err) {
            return res.status(400).json({ message: err })
        }
    }

    async create(req: ValidatedRequest<EmployeeRequestSchema>, res: Response): Promise<Response> {
        try {
            validator.header(req.headers)
            const decodedToken = jwt.verify(
                req.headers.authorization.replace(/^Bearer\s+/, ''),
                process.env.JWT_SECRET
            )
            if (decodedToken.user.role !== 'ADMIN') {
                throw createError(403, 'Insufficient Privilege')
            }
            const employee = await employeeService.create(req.body)
            return res.status(202).json(employee)
        } catch (err) {
            return res.status(400).json({ message: err })
        }
    }

    async all(req: Request, res: Response): Promise<Response> {
        try {
            validator.header(req.headers)
            const decodedToken = jwt.verify(
                req.headers.authorization.replace(/^Bearer\s+/, ''),
                process.env.JWT_SECRET
            )
            if (decodedToken.user.role !== 'ADMIN') {
                throw createError(403, 'Insufficient Privilege')
            }
            const employee = await employeeService.findAll()
            return res.status(200).json(employee)
        } catch (err) {
            return res.status(400).json({ message: err })
        }
    }
}

export { EmployeeController }
