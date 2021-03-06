import { MinLength, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'admin',
    description: `User login (unique)`,
  })
  @IsNotEmpty()
  login: string;

  @ApiProperty({
    example: 'password',
    minimum: 6,
  })
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    required: false,
    example: 'Donald',
  })
  @IsOptional()
  username: string;

  @ApiProperty({
    required: false,
    example: '25',
  })
  @IsOptional()
  age: number;
}
