import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('employee')
class Employee {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('jsonb', { nullable: false })
    products: object[]

    @Column()
    total: number

    @Column()
    table: number

    @Column()
    hostess: string

    @Column()
    payment_type: string

    @Column()
    paid: number

    @Column()
    change: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export { Employee }
