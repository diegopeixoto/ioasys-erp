import { getRepository } from 'typeorm'

import { Product } from '../entities/Product'
import { IProduct } from '../entities/schema/product-schema'

class ProductService {
    async create(data: IProduct) {
        const productRepository = getRepository(Product)
        try {
            return productRepository.save(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
    async findAll() {
        const productRepository = getRepository(Product)
        try {
            return productRepository.find()
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async findOne(id) {
        const productRepository = getRepository(Product)
        try {
            return productRepository.findOne({ id })
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async deleteOne(id) {
        const productRepository = getRepository(Product)

        try {
            const product = await productRepository.findOne({ id })
            return productRepository.remove(product)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

export { ProductService }
