/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingModule } from './building/building.module';
import { LocationModule } from './location/location.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Building } from './building/entities/building.entity';
import { Location } from './location/entities/location.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule } from './shared/logger/logger.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './shared/httpInterceptor/http.interceptor';
import { LoggerService } from './shared/logger/logger.service';

@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    BuildingModule,
    LocationModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [Building, Location],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useFactory: (loggingService: LoggerService) =>
        new LoggingInterceptor(loggingService),
      inject: [LoggerService],
    },
    {
      provide: APP_FILTER,
      useFactory: (loggingService: LoggerService) =>
        new LoggingInterceptor(loggingService),
      inject: [LoggerService],
    },
  ],
})
export class AppModule {}
