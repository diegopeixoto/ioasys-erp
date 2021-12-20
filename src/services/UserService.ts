import { getRepository } from 'typeorm'

import { IUser } from '../entities/schema/user-schema'
import { User } from '../entities/User'

class UserService {
    async create(data: IUser) {
        const userRepository = getRepository(User)
        try {
            return userRepository.save(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

export { UserService }
