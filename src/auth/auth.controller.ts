import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Res,
    HttpStatus,
    ValidationPipe,
    UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Res() res: Response, @Body() createUserDto: CreateUserDto) {
        console.log(createUserDto);
        await this.authService.create(createUserDto);
        res.status(HttpStatus.CREATED).jsonp(createUserDto);
    }

    @Get()
    findAll() {
        return this.authService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.authService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAuthDto: UpdateUserDto) {
        return this.authService.update(+id, updateAuthDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.authService.remove(+id);
    }
}
