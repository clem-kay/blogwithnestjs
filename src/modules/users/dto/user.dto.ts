import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';
enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
}
export class UserDto {
    @IsNotEmpty()
    readonly username: string;
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;
    @IsNotEmpty()
    @IsEnum(Gender, {
        message: 'gender must be either MALE or FEMALE',
    })
    readonly gender: Gender;
}