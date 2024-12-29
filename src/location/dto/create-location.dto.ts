import { IsNotEmpty, IsString, Matches, IsDecimal } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLocationDto {
  @ApiProperty({
    description: 'The location number in the format BuildingCode-Section',
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Za-z0-9]+(-[A-Za-z0-9]+)*$/, {
    message: 'location_number must follow the format BuildingCode-Section',
  })
  location_number: string;

  @ApiProperty({ description: 'The name of the location' })
  @IsNotEmpty()
  @IsString()
  location_name: string;

  @ApiProperty({ description: 'The area of the location in square meters' })
  @IsNotEmpty()
  @IsDecimal()
  area: number;

  @ApiProperty({ description: 'The code of the building' })
  @IsNotEmpty()
  @IsString()
  building_code: string;
}
