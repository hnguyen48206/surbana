import { Building } from '../../building/entities/building.entity';
import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Location {
  @PrimaryColumn() location_number: string;
  @Column() location_name: string;
  @Column('decimal', { precision: 10, scale: 2 }) area: number;
  @ManyToOne(() => Building)
  @JoinColumn({ name: 'building_code' })
  building: Building;
  @Column() building_code: string;
}
