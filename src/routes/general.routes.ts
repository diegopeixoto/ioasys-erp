import { Request, Response, Router } from 'express'

const generalRoutes = Router()

generalRoutes.get('/', async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
        message: 'Hello!'
    })
})

export { generalRoutes }
