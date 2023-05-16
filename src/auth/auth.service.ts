import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../schemas/lib/User';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    // this is register service
    async create(CreateUserDto: CreateUserDto) {
        // this is to generate new User
        console.log(CreateUserDto);
        await this.userModel.create(CreateUserDto);
        return 'what should i do over here??'; // might return code and message from here
    }

    findAll() {
        return `This action returns all auth`;
    }

    findOne(id: number) {
        return `This action returns a #${id} auth`;
    }

    update(id: number, updateAuthDto: UpdateUserDto) {
        return `This action updates a #${id} auth`;
    }

    remove(id: number) {
        return `This action removes a #${id} auth`;
    }
}
