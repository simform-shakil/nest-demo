import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    create(createUserDto: CreateUserDto) {
        const user: User = new User();
        user.firstName = createUserDto.firstName;
        user.lastName = createUserDto.lastName;
        user.email = createUserDto.email;
        user.password = createUserDto.password;
        user.age = createUserDto.age;
        return this.userRepository.save(user);
    }

    findAll() {
        console.log('Find all called :: ');
        return this.userRepository.find();
        // return `This action returns all user`;
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
