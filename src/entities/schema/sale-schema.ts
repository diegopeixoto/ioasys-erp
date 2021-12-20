import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation'
import Joi from 'joi'

export const saleSchema = Joi.object({
    products: Joi.object().required(),
    table: Joi.number().required(),
    hostess: { type: Joi.string().required(), value: Joi.string().required() },
    payment: {
        type: Joi.string().required(),
        paid: Joi.number().required()
    }
})

export interface SaleRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: {
        products: object[]
        table: number
        hostess: { type: string; value: string }
        payment: { type: string; paid: number }
    }
}

export interface ISale {
    products: object[]
    table: number
    hostess: { type: string; value: string }
    payment: { type: string; paid: number }
}
