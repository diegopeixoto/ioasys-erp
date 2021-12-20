import { getRepository } from 'typeorm'

import { IUser } from '../entities/schema/user-schema'
import { User } from '../entities/User'

class UserService {
    async create(UserDto: IUser) {
        const userRepository = getRepository(User)
        try {
            const data = userRepository.create(UserDto)
            return userRepository.save(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

export { UserService }
