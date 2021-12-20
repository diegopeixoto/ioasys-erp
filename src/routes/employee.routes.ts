import { Router } from 'express'
import { createValidator } from 'express-joi-validation'
import passport from 'passport'

import { EmployeeController } from '../controllers/EmployeeController'
import { employeeSchema } from '../entities/schema/employee-schema'
import { occupationSchema } from '../entities/schema/occupation-schema'

const validator = createValidator()

const employeeRoutes = Router()
const employeeController = new EmployeeController()

employeeRoutes.post(
    '/new',
    [validator.body(employeeSchema), passport.authenticate('jwt', { session: false })],
    employeeController.create
)

employeeRoutes.get('/', passport.authenticate('jwt', { session: false }), employeeController.all)

employeeRoutes.get(
    '/occupation/',
    passport.authenticate('jwt', { session: false }),
    employeeController.allOccupation
)

employeeRoutes.post(
    '/occupation/new',
    [validator.body(occupationSchema), passport.authenticate('jwt', { session: false })],
    employeeController.createOccupation
)

export { employeeRoutes }
