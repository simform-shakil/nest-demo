import {
    IsAlphanumeric,
    IsNotEmpty,
    Length,
    MaxLength,
    MinLength,
} from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({ message: 'Name is required field.' })
    name: string;

    @IsNotEmpty({ message: 'username is required field' })
    @Length(3, 20)
    username: string;

    @IsNotEmpty({ message: 'password can not be empty' })
    @IsAlphanumeric()
    @MinLength(10)
    @MaxLength(15, { message: 'Maximum 15 chars allowed in password' })
    password: string;
}
