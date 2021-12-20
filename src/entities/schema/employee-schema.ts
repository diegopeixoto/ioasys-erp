import validator from 'cpf-cnpj-validator'
import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Joi = require('@hapi/joi').extend(validator)

export const employeeSchema = Joi.object({
    name: Joi.string().required(),
    document: Joi.document().cpf().required(),
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
