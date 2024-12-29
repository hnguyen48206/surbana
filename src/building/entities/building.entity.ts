import { Entity, Column, PrimaryColumn } from 'typeorm';
@Entity()
export class Building {
  @PrimaryColumn() building_code: string;
  @Column() building_name: string;
}
