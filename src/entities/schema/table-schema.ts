import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation'
import Joi from 'joi'

export const tableSchema = Joi.object({
    table_number: Joi.number().required(),
    chairs: Joi.number().required(),
    vip: Joi.boolean().required()
})

export interface TableRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: {
        table_number: number
        chairs: number
        vip: boolean
    }
}

export interface ITable {
    table_number: number
    chairs: number
    vip: boolean
}
