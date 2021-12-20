import { Router } from 'express'
import { createValidator } from 'express-joi-validation'
import passport from 'passport'

import { ProductController } from '../controllers/ProductController'
import { productSchema } from '../entities/schema/product-schema'

const validator = createValidator()

const productRoutes = Router()
const productController = new ProductController()

productRoutes.post(
    '/new',
    [validator.body(productSchema), passport.authenticate('jwt', { session: false })],
    productController.create
)
productRoutes.get('/', passport.authenticate('jwt', { session: false }), productController.all)
productRoutes.get('/:id', passport.authenticate('jwt', { session: false }), productController.one)
productRoutes.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    productController.remove
)
export { productRoutes }
