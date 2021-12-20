import { Router } from 'express'

import { generalRoutes } from './general.routes'
import { userRoutes } from './users.routes'

const routes = Router()

routes.use('/', generalRoutes)
routes.use('/users', userRoutes)

export { routes }
