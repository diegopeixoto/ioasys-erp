import { getRepository } from 'typeorm'

import { Roles } from '../entities/Roles'
import { IRole } from '../entities/schema/role-schema'

class RoleService {
    async create(data: IRole) {
        const roleRepository = getRepository(Roles)
        try {
            return roleRepository.save(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

export { RoleService }
