import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm'

import { Occupation } from './Occupation'

@Entity('employee')
class Employee {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column({ unique: true })
    document: string

    @Column()
    occupation: string

    @ManyToMany(() => Occupation, (occupations) => occupations.occupation, { cascade: true })
    @JoinColumn({ name: 'occupation' })
    roles: Occupation

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export { Employee }
