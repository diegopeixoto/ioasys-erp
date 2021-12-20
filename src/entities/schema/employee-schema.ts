import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation'
import Joi from 'joi'

export const employeeSchema = Joi.object({
    name: Joi.string().required(),
    document: Joi.string().required(),
    occupation: Joi.string().required()
})

export interface EmployeeRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: {
        name: string
        document: string
        occupation: string
    }
}

export interface IEmployee {
    name: string
    document: string
    occupation: string
}
