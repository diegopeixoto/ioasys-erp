import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('sale')
class Sale {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('jsonb', { nullable: false })
    products: object[]

    @Column('float')
    total: number

    @Column()
    table: number

    @Column()
    hostess: string

    @Column()
    payment_type: string

    @Column('float')
    paid: number

    @Column('float')
    change: number

    @Column('float')
    cost: number

    @Column('float')
    profit: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export { Sale }
