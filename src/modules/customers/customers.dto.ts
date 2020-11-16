import { ApiProperty } from '@nestjs/swagger';


export class CustomerDto {
  readonly ID: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly state: string;
  readonly petExperience: string;
}

export class CustomerQueryDto {
  @ApiProperty({ required: false })
  name?: string;
  @ApiProperty({ required: false })
  email?: string;
  @ApiProperty({ required: false })
  state?: string;
  @ApiProperty({ required: false })
  petExperience?: string;
}
