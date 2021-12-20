import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('product')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    product: string

    @Column()
    cost: number

    @Column()
    value: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export { Product }
