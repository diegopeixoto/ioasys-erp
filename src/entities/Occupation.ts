import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('occupation')
class Occupation {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    occupation: string

    @Column()
    wage: number
}

export { Occupation }
