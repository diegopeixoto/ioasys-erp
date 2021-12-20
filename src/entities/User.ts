import bcrypt from 'bcrypt'
import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm'

import { Roles } from './Roles'
@Entity('user')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    user: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column()
    role: string

    @ManyToMany(() => Roles, (roles) => roles.role, { cascade: true })
    @JoinColumn({ name: 'role' })
    roles: Roles

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @BeforeInsert() async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10)
    }
}

export { User }
