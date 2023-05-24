import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'po32@po32',
  })
  email: string;

  @ApiProperty({
    default: 'Лина Русская',
  })
  fullName: string;

  @ApiProperty({
    default: '123',
  })
  password: string;
}
