import {
    BaseEntity,
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export default class GenreEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;
}
