import { Request, Response } from 'express'
import { ValidatedRequest } from 'express-joi-validation'
import createError from 'http-errors'
import jwt from 'jsonwebtoken'

import { ProductRequestSchema } from '../entities/schema/product-schema'
import { ProductService } from '../services/ProductService'
import { Validator } from '../utils/validator.utils'

const productService = new ProductService()
const validator = new Validator()

class ProductController {
    async create(req: ValidatedRequest<ProductRequestSchema>, res: Response): Promise<Response> {
        try {
            validator.header(req.headers)
            const product = await productService.create(req.body)
            return res.status(202).json(product)
        } catch (err) {
            return res.status(400).json({ message: err })
        }
    }

    async one(req: Request, res: Response): Promise<Response> {
        try {
            validator.header(req.headers)
            const products = await productService.findOne(req.params.id)
            return res.status(200).json(products)
        } catch (err) {
            return res.status(400).json({ message: err })
        }
    }

    async remove(req: Request, res: Response): Promise<Response> {
        try {
            validator.header(req.headers)
            const decodedToken = jwt.verify(
                req.headers.authorization.replace(/^Bearer\s+/, ''),
                process.env.JWT_SECRET
            )
            if (decodedToken.user.role !== 'ADMIN') {
                throw createError(403, 'Insufficient Privilege')
            }
            const products = await productService.deleteOne(req.params.id)
            return res.status(200).json(products)
        } catch (err) {
            return res.status(400).json({ message: err })
        }
    }

    async all(req: Request, res: Response): Promise<Response> {
        try {
            validator.header(req.headers)
            const products = await productService.findAll()
            return res.status(200).json(products)
        } catch (err) {
            return res.status(400).json({ message: err })
        }
    }
}

export { ProductController }
