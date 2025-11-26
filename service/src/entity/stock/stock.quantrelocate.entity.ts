import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Stock Quantity Relocation
 */
@Entity('stock_quant_relocate')
export class StockQuantRelocate {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Dest Location
   */
  @Column({
    type: 'int'
  })
  dest_location_id: number;

  // @ManyToOne(() => DestLocation)
  // @JoinColumn({ name: 'dest_location_id' })
  // dest_location: DestLocation;

  /**
   * Dest Package
   */
  @Column({
    type: 'int'
  })
  dest_package_id: number;

  // @ManyToOne(() => DestPackage)
  // @JoinColumn({ name: 'dest_package_id' })
  // dest_package: DestPackage;

  /**
   * Created by
   */
  @Column({
    type: 'int'
  })
  create_uid: number;

  /**
   * Last Updated by
   */
  @Column({
    type: 'int'
  })
  write_uid: number;

  /**
   * Reason for relocation
   */
  @Column({
    type: 'varchar'
  })
  message: string;

  /**
   * Created on
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

}