import { getRepository } from 'typeorm'

import { Sale } from '../entities/Sale'
import { ISale } from '../entities/schema/sale-schema'

class SaleService {
    async create(data: ISale) {
        const saleRepository = getRepository(Sale)
        try {
            return saleRepository.save(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async findOne(id) {
        const saleRepository = getRepository(Sale)
        try {
            return saleRepository.findOne({ id })
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async findAll() {
        const saleRepository = getRepository(Sale)
        try {
            return saleRepository.find()
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

export { SaleService }
