import {
    IsAlphanumeric,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    Length,
    MaxLength,
    MinLength,
} from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({ message: 'username is required field' })
    @Length(3, 20)
    firstName: string;

    @IsNotEmpty({ message: 'Name is required field.' })
    @Length(3, 20)
    lastName: string;

    @IsNotEmpty({ message: 'password can not be empty' })
    @IsAlphanumeric()
    @MinLength(10)
    @MaxLength(15, { message: 'Maximum 15 chars allowed in password' })
    password: string;

    @IsNumber()
    age: number;

    @IsEmail()
    email: string;
}
