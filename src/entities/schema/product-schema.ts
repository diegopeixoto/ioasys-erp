import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation'
import Joi from 'joi'

export const productSchema = Joi.object({
    product: Joi.string().required(),
    cost: Joi.number().required(),
    value: Joi.number().required()
})

export interface ProductRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: {
        product: string
        cost: number
        value: number
    }
}

export interface IProduct {
    product: string
    cost: number
    value: number
}
