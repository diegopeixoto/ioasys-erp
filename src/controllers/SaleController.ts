import { Request, Response } from 'express'
import { ValidatedRequest } from 'express-joi-validation'
import createError from 'http-errors'
import jwt from 'jsonwebtoken'

import { SaleRequestSchema } from '../entities/schema/sale-schema'
import { TableRequestSchema } from '../entities/schema/table-schema'
import { EmployeeService } from '../services/EmployeeService'
import { ProductService } from '../services/ProductService'
import { SaleService } from '../services/SaleService'
import { TableService } from '../services/TableService'
import { Validator } from '../utils/validator.utils'

const tableService = new TableService()
const productService = new ProductService()
const employeeService = new EmployeeService()
const saleService = new SaleService()
const validator = new Validator()

class SaleController {
    async createTable(req: ValidatedRequest<TableRequestSchema>, res: Response): Promise<Response> {
        try {
            validator.header(req.headers)
            const decodedToken = jwt.verify(
                req.headers.authorization.replace(/^Bearer\s+/, ''),
                process.env.JWT_SECRET
            )
            if (decodedToken.user.role !== 'ADMIN') {
                throw createError(403, 'Insufficient Privilege')
            }
            const product = await tableService.create(req.body)
            return res.status(202).json(product)
        } catch (err) {
            return res.status(400).json({ message: err })
        }
    }
    async allTable(req: Request, res: Response): Promise<Response> {
        try {
            validator.header(req.headers)
            const decodedToken = jwt.verify(
                req.headers.authorization.replace(/^Bearer\s+/, ''),
                process.env.JWT_SECRET
            )
            if (decodedToken.user.role !== 'ADMIN') {
                throw createError(403, 'Insufficient Privilege')
            }
            const table = await tableService.findAll()
            return res.status(200).json(table)
        } catch (err) {
            return res.status(400).json({ message: err })
        }
    }

    async create(req: ValidatedRequest<SaleRequestSchema>, res: Response): Promise<Response> {
        try {
            validator.header(req.headers)
            const { products, table, hostess, payment } = req.body

            let total = 0
            let cost = 0
            let change = 0

            for (let i = 0; i < products.length; i++) {
                const productId = products[i][0]
                const productQty = products[i][1]
                const resultProduct = await productService.findOne(productId)

                total += resultProduct.value * productQty
                cost += resultProduct.cost * productQty
            }

            if (payment.paid < total) {
                throw createError(400, 'Invalid Paid Value')
            }

            const employee = await employeeService.findOne({ [hostess.type]: hostess.value })

            switch (payment.type.toUpperCase()) {
                case 'MONEY': {
                    change = payment.paid - total
                    break
                }
            }

            const product = await saleService.create({
                products,
                total,
                table,
                hostess: employee.id,
                payment_type: payment.type,
                paid: payment.paid,
                change,
                cost,
                profit: total - cost
            })
            return res.status(202).json(product)
        } catch (err) {
            return res.status(400).json({ message: err })
        }
    }

    async one(req: Request, res: Response): Promise<Response> {
        try {
            validator.header(req.headers)
            const sale = await saleService.findOne(req.params.id)
            return res.status(200).json(sale)
        } catch (err) {
            return res.status(400).json({ message: err })
        }
    }
    async all(req: Request, res: Response): Promise<Response> {
        try {
            validator.header(req.headers)
            const sales = await saleService.findAll()
            return res.status(200).json(sales)
        } catch (err) {
            return res.status(400).json({ message: err })
        }
    }
}

export { SaleController }
