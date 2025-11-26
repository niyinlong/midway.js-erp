import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Package
 */
@Entity('stock_package')
export class StockPackage {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Location
   */
  @Column({
    type: 'int'
  })
  location_id: number;

  // @ManyToOne(() => Location)
  // @JoinColumn({ name: 'location_id' })
  // location: Location;

  /**
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  /**
   * Container
   */
  @Column({
    type: 'int'
  })
  parent_package_id: number;

  // @ManyToOne(() => ParentPackage)
  // @JoinColumn({ name: 'parent_package_id' })
  // parent_package: ParentPackage;

  /**
   * Destination Container
   */
  @Column({
    type: 'int'
  })
  package_dest_id: number;

  // @ManyToOne(() => PackageDest)
  // @JoinColumn({ name: 'package_dest_id' })
  // package_dest: PackageDest;

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
   * Package Reference
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Full Package Name
   */
  @Column({
    type: 'varchar'
  })
  complete_name: string;

  /**
   * Parent Path
   */
  @Column({
    type: 'varchar'
  })
  parent_path: string;

  /**
   * Pack Date
   */
  @Column({
    type: 'datetime'
  })
  pack_date: Date;

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

  /**
   * Shipping Weight
   */
  @Column({
    type: 'varchar'
  })
  shipping_weight: string;

}