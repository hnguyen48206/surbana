import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateBuildingDto {
  @ApiProperty({ description: 'The code of the building' })
  @IsNotEmpty()
  @IsString()
  building_code: string;

  @ApiProperty({ description: 'The name of the building' })
  @IsNotEmpty()
  @IsString()
  building_name: string;
}
