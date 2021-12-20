import { getRepository } from 'typeorm'

import { ITable } from '../entities/schema/table-schema'
import { Table } from '../entities/Table'

class TableService {
    async create(data: ITable) {
        const tableRepository = getRepository(Table)
        try {
            return tableRepository.save(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async findAll() {
        const tableRepository = getRepository(Table)
        try {
            return tableRepository.find()
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

export { TableService }
