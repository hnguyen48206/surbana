import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LoggerService } from '../shared/logger/logger.service';

@Controller('locations')
export class LocationController {
  constructor(
    private readonly locationsService: LocationService,
    private myLogger: LoggerService,
  ) {
    this.myLogger.setContext('LocationService');
  }

  @Post()
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationsService.create(createLocationDto);
  }

  @Get()
  findAll() {
    return this.locationsService.findAll();
  }

  @Get(':location_number')
  findOne(@Param('location_number') location_number: string) {
    return this.locationsService.findOne(location_number);
  }

  @Put(':location_number')
  update(
    @Param('location_number') location_number: string,
    @Body() updateLocationDto: UpdateLocationDto,
  ) {
    return this.locationsService.update(location_number, updateLocationDto);
  }

  @Delete(':location_number')
  remove(@Param('location_number') location_number: string) {
    return this.locationsService.remove(location_number);
  }
}
