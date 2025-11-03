import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: '유저 인덱스 번호',
    required: true,
  })
  readonly id: number;

  @IsNotEmpty()
  @MinLength(2)
  @IsString()
  @ApiProperty({
    description: '유저 이름',
    required: true,
    example: '홍길동',
  })
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: '유저 이메일',
    required: true,
    example: 'webtool@google.com',
  })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: '유저 비밀번호',
    required: true,
    example: 'password',
  })
  readonly password: string;

  @IsNotEmpty()
  @MinLength(2)
  @IsString()
  @ApiProperty({
    description: '유저 소속',
    required: true,
    example: '프로그램팀',
  })
  readonly department: string;
}
