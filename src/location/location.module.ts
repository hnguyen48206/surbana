import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { Location } from './entities/location.entity';
import { LoggerModule } from '../shared/logger/logger.module';

@Module({
  imports: [TypeOrmModule.forFeature([Location]), LoggerModule],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
