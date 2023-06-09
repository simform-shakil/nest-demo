import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToMany,
} from 'typeorm';
import BookEntity from './../../book/entities/book.entity';
@Entity()
export default class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @OneToMany((type) => BookEntity, (book) => book.user)
    books: BookEntity[];
}
