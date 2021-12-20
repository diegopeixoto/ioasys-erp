import { Router } from 'express'
import { createValidator } from 'express-joi-validation'
import passport from 'passport'

import { SaleController } from '../controllers/SaleController'

const validator = createValidator()

import { saleSchema } from '../entities/schema/sale-schema'
import { tableSchema } from '../entities/schema/table-schema'

const saleRoutes = Router()
const saleController = new SaleController()

saleRoutes.post(
    '/sell',
    [validator.body(saleSchema), passport.authenticate('jwt', { session: false })],
    saleController.create
)

saleRoutes.post(
    '/table/new',
    [validator.body(tableSchema), passport.authenticate('jwt', { session: false })],
    saleController.createTable
)

saleRoutes.get('/table/', passport.authenticate('jwt', { session: false }), saleController.allTable)

saleRoutes.get('/', passport.authenticate('jwt', { session: false }), saleController.all)
saleRoutes.get('/:id', passport.authenticate('jwt', { session: false }), saleController.one)
export { saleRoutes }
