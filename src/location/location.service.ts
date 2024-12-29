import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    const { location_number, building_code } = createLocationDto;

    // Validate that the location_number starts with the building_code
    if (!location_number.startsWith(building_code)) {
      throw new BadRequestException(
        `The location number must start with the same building code.`,
      );
    }

    // Validate parent location existence for child locations
    const segments = location_number.split('-');
    if (segments.length > 1) {
      for (let i = 1; i < segments.length; i++) {
        if (i === 1) continue;

        const parentLocationNumber = segments.slice(0, i + 1).join('-');
        const parentLocation = await this.locationRepository.findOne({
          where: { location_number: parentLocationNumber, building_code },
        });
        if (!parentLocation) {
          throw new BadRequestException(
            `The parent location does not exist: ${parentLocationNumber}`,
          );
        }
      }
    }

    const location = this.locationRepository.create(createLocationDto);
    return this.locationRepository.save(location);
  }

  async findAll(): Promise<Location[]> {
    return this.locationRepository.find();
  }

  async findOne(location_number: string): Promise<Location[]> {
    const query = `WITH RECURSIVE LocationTree AS (
    SELECT * FROM Location WHERE location_number = $1
    UNION ALL
    SELECT l.* FROM Location l
    INNER JOIN LocationTree lt ON l.location_number LIKE lt.location_number || '-%'
    )
    SELECT distinct * FROM LocationTree;`;
    return this.locationRepository.query(query, [location_number]);
  }

  async update(
    location_number: string,
    updateLocationDto: UpdateLocationDto,
  ): Promise<Location> {
    const location = await this.locationRepository.findOne({
      where: { location_number },
    });

    if (!location) {
      throw new NotFoundException(
        `Location with number ${location_number} not found`,
      );
    }

    const newLocationNumber =
      updateLocationDto.location_number || location.location_number;
    const newBuildingCode =
      updateLocationDto.building_code || newLocationNumber.split('-')[0];

    // Validate that the provided building_code matches the location_number prefix if both are provided
    if (
      updateLocationDto.building_code &&
      updateLocationDto.location_number &&
      !newLocationNumber.startsWith(updateLocationDto.building_code)
    ) {
      throw new BadRequestException(
        `The building code and location number prefix do not match.`,
      );
    }

    // Determine the updated location_number with the new building_code prefix if only building_code is provided
    const finalNewLocationNumber = updateLocationDto.location_number
      ? newLocationNumber
      : `${newBuildingCode}${location_number.slice(location_number.indexOf('-'))}`;

    // Validate hierarchy existence in the new building
    const segments = finalNewLocationNumber.split('-');
    for (let i = 1; i < segments.length; i++) {
      // Skip the check for the first child location directly under the building
      if (i === 1) continue;

      const parentLocationNumber = segments.slice(0, i + 1).join('-');
      const parentLocation = await this.locationRepository.findOne({
        where: {
          location_number: parentLocationNumber,
          building_code: newBuildingCode,
        },
      });
      if (!parentLocation) {
        throw new BadRequestException(
          `The location hierarchy does not exist in the new building: ${parentLocationNumber}`,
        );
      }
    }

    // Fetch all descendants
    const query = `
        WITH RECURSIVE LocationTree AS (
            SELECT * FROM location WHERE location_number = $1
            UNION ALL
            SELECT l.* FROM location l
            INNER JOIN LocationTree lt ON l.location_number LIKE lt.location_number || '-%'
        )
        SELECT * FROM LocationTree
    `;
    const descendants = await this.locationRepository.query(query, [
      location_number,
    ]);

    // Update each descendant's location_number and building_code
    for (const descendant of descendants) {
      const updatedLocationNumber = descendant.location_number.replace(
        location_number,
        finalNewLocationNumber,
      );
      await this.locationRepository.update(descendant.location_number, {
        location_number: updatedLocationNumber,
        building_code: newBuildingCode,
      });
    }

    // Update the location itself
    await this.locationRepository.update(location_number, {
      ...updateLocationDto,
      location_number: finalNewLocationNumber,
      building_code: newBuildingCode,
    });

    return this.locationRepository.findOne({
      where: { location_number: finalNewLocationNumber },
    });
  }

  async remove(location_number: string): Promise<void> {
    await this.locationRepository.delete(location_number);
  }
}
