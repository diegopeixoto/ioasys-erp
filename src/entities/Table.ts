import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('table')
class Table {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    table_number: number

    @Column()
    chairs: number

    @Column()
    vip: boolean
}

export { Table }
