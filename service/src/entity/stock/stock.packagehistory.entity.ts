import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Stock Package History
 */
@Entity('stock_package_history')
export class StockPackageHistory {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Origin Location
   */
  @Column({
    type: 'int'
  })
  location_id: number;

  // @ManyToOne(() => Location)
  // @JoinColumn({ name: 'location_id' })
  // location: Location;

  /**
   * Destination Location
   */
  @Column({
    type: 'int'
  })
  location_dest_id: number;

  // @ManyToOne(() => LocationDest)
  // @JoinColumn({ name: 'location_dest_id' })
  // location_dest: LocationDest;

  /**
   * Package
   */
  @Column({
    type: 'int'
  })
  package_id: number;

  // @ManyToOne(() => Package)
  // @JoinColumn({ name: 'package_id' })
  // package: Package;

  /**
   * Origin Container
   */
  @Column({
    type: 'int'
  })
  parent_orig_id: number;

  // @ManyToOne(() => ParentOrig)
  // @JoinColumn({ name: 'parent_orig_id' })
  // parent_orig: ParentOrig;

  /**
   * Destination Container
   */
  @Column({
    type: 'int'
  })
  parent_dest_id: number;

  // @ManyToOne(() => ParentDest)
  // @JoinColumn({ name: 'parent_dest_id' })
  // parent_dest: ParentDest;

  /**
   * Outermost Destination Container
   */
  @Column({
    type: 'int'
  })
  outermost_dest_id: number;

  // @ManyToOne(() => OutermostDest)
  // @JoinColumn({ name: 'outermost_dest_id' })
  // outermost_dest: OutermostDest;

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
   * Package Name
   */
  @Column({
    type: 'varchar'
  })
  package_name: string;

  /**
   * Origin Container Name
   */
  @Column({
    type: 'varchar'
  })
  parent_orig_name: string;

  /**
   * Destination Container Name
   */
  @Column({
    type: 'varchar'
  })
  parent_dest_name: string;

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