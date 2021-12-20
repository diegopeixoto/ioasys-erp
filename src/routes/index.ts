import { Router } from 'express'

import { employeeRoutes } from './employee.routes'
import { generalRoutes } from './general.routes'
import { productRoutes } from './product.routes'
import { saleRoutes } from './sales.routes'
import { userRoutes } from './users.routes'

const routes = Router()

routes.use('/', generalRoutes)
routes.use('/users', userRoutes)
routes.use('/sale', saleRoutes)
routes.use('/employee', employeeRoutes)
routes.use('/product', productRoutes)

export { routes }
