import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Building } from './entities/building.entity';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';

@Injectable()
export class BuildingService {
  constructor(
    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>,
  ) {}

  async create(createBuildingDto: CreateBuildingDto): Promise<Building> {
    const building = this.buildingRepository.create(createBuildingDto);
    return this.buildingRepository.save(building);
  }

  async findAll(): Promise<Building[]> {
    return this.buildingRepository.find();
  }

  async findOne(building_code: string): Promise<Building> {
    return this.buildingRepository.findOne({ where: { building_code } });
  }

  async update(
    building_code: string,
    updateBuildingDto: UpdateBuildingDto,
  ): Promise<Building> {
    await this.buildingRepository.update(building_code, updateBuildingDto);
    return this.buildingRepository.findOne({ where: { building_code } });
  }

  async remove(building_code: string): Promise<void> {
    await this.buildingRepository.delete(building_code);
  }
}
