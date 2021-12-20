import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('role')
class Roles {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    role: string
}

export { Roles }
