import { IsOptional, IsString, Matches, IsDecimal } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateLocationDto {
  @ApiPropertyOptional({
    description: 'The location number in the format BuildingCode-Section',
  })
  @IsOptional()
  @IsString()
  @Matches(/^[A-Za-z0-9]+(-[A-Za-z0-9]+)*$/, {
    message: 'location_number must follow the format BuildingCode-Section',
  })
  location_number?: string;

  @ApiPropertyOptional({ description: 'The name of the location' })
  @IsOptional()
  @IsString()
  location_name?: string;

  @ApiPropertyOptional({
    description: 'The area of the location in square meters',
  })
  @IsOptional()
  @IsDecimal()
  area?: number;

  @ApiPropertyOptional({ description: 'The code of the building' })
  @IsString()
  building_code: string;
}
