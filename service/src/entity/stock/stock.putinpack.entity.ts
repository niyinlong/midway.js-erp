import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Put In Pack Wizard
 */
@Entity('stock_put_in_pack')
export class StockPutInPack {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Destination
   */
  @Column({
    type: 'int'
  })
  location_dest_id: number;

  // @ManyToOne(() => LocationDest)
  // @JoinColumn({ name: 'location_dest_id' })
  // location_dest: LocationDest;

  /**
   * Package Type
   */
  @Column({
    type: 'int'
  })
  package_type_id: number;

  // @ManyToOne(() => PackageType)
  // @JoinColumn({ name: 'package_type_id' })
  // package_type: PackageType;

  /**
   * Package
   */
  @Column({
    type: 'int'
  })
  result_package_id: number;

  // @ManyToOne(() => ResultPackage)
  // @JoinColumn({ name: 'result_package_id' })
  // result_package: ResultPackage;

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