import { Router } from 'express'

import { generalRoutes } from './general.routes'

const routes = Router()

routes.use('/', generalRoutes)

export { routes }
