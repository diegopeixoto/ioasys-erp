import { getRepository } from 'typeorm'

import { Employee } from '../entities/Employee'
import { IEmployee } from '../entities/schema/employee-schema'

class EmployeeService {
    async create(data: IEmployee) {
        const employeeRepository = getRepository(Employee)
        try {
            return employeeRepository.save(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
    async findOne(options) {
        const employeeRepository = getRepository(Employee)
        try {
            return employeeRepository.findOne(options)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async findAll() {
        const employeeRepository = getRepository(Employee)
        try {
            return employeeRepository.find()
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

export { EmployeeService }
