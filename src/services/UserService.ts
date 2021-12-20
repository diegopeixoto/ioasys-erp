import bcrypt from 'bcrypt'
import { getRepository } from 'typeorm'

import { IUser } from '../entities/schema/user-schema'
import { User } from '../entities/User'

class UserService {
    async create(UserDto: IUser) {
        try {
            const userRepository = getRepository(User)
            const data = userRepository.create(UserDto)
            return userRepository.save(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
    async findOne({ username }) {
        try {
            const userRepository = getRepository(User)
            const user = await userRepository.findOne({ user: username })
            return user
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

const _isValidPassword = async function (username: string, password: string) {
    const user = this.findOne({ username })
    const comparePassword = await bcrypt.compare(password, user.password)
    return comparePassword
    return true
}
export { _isValidPassword, UserService }
