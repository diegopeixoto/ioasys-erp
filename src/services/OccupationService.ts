import { getRepository } from 'typeorm'

import { Occupation } from '../entities/Occupation'
import { IOccupation } from '../entities/schema/occupation-schema'

class OccupationService {
    async create(data: IOccupation) {
        const occupationRepository = getRepository(Occupation)
        try {
            return occupationRepository.save(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async findAll() {
        const occupationRepository = getRepository(Occupation)
        try {
            return occupationRepository.find()
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

export { OccupationService }
