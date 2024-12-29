import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateBuildingDto {
  @ApiProperty({ description: 'The name of the building' })
  @IsOptional()
  @IsString()
  building_name?: string;
}
