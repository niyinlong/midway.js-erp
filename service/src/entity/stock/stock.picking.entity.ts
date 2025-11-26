import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Transfer
 */
@Entity('stock_picking')
export class StockPicking {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Back Order of
   */
  @Column({
    type: 'int'
  })
  backorder_id: number;

  // @ManyToOne(() => Backorder)
  // @JoinColumn({ name: 'backorder_id' })
  // backorder: Backorder;

  /**
   * Return of
   */
  @Column({
    type: 'int'
  })
  return_id: number;

  // @ManyToOne(() => Return)
  // @JoinColumn({ name: 'return_id' })
  // return: Return;

  /**
   * Source Location
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
   * Operation Type
   */
  @Column({
    type: 'int'
  })
  picking_type_id: number;

  // @ManyToOne(() => PickingType)
  // @JoinColumn({ name: 'picking_type_id' })
  // picking_type: PickingType;

  /**
   * Contact
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

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
   * Responsible
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Assign Owner
   */
  @Column({
    type: 'int'
  })
  owner_id: number;

  // @ManyToOne(() => Owner)
  // @JoinColumn({ name: 'owner_id' })
  // owner: Owner;

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
   * Reference
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Source Document
   */
  @Column({
    type: 'varchar'
  })
  origin: string;

  /**
   * Shipping Policy
   */
  @Column({
    type: 'varchar'
  })
  move_type: string;

  /**
   * Status
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Priority
   */
  @Column({
    type: 'varchar'
  })
  priority: string;

  /**
   * Properties
   */
  @Column({
    type: 'jsonb'
  })
  picking_properties: object;

  /**
   * Notes
   */
  @Column({
    type: 'varchar'
  })
  note: string;

  /**
   * Weight for Shipping
   */
  @Column({
    type: 'int'
  })
  shipping_weight: number;

  /**
   * Is late
   */
  @Column({
    type: 'boolean'
  })
  has_deadline_issue: boolean;

  /**
   * Printed
   */
  @Column({
    type: 'boolean'
  })
  printed: boolean;

  /**
   * Is Locked
   */
  @Column({
    type: 'boolean'
  })
  is_locked: boolean;

  /**
   * Scheduled Date
   */
  @Column({
    type: 'datetime'
  })
  scheduled_date: Date;

  /**
   * Deadline
   */
  @Column({
    type: 'datetime'
  })
  date_deadline: Date;

  /**
   * Date of Transfer
   */
  @Column({
    type: 'datetime'
  })
  date_done: Date;

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

  @Column({
    type: 'int'
  })
  sale_id: number;

  // @ManyToOne(() => Sale)
  // @JoinColumn({ name: 'sale_id' })
  // sale: Sale;

  /**
   * Project
   */
  @Column({
    type: 'int'
  })
  project_id: number;

  // @ManyToOne(() => Project)
  // @JoinColumn({ name: 'project_id' })
  // project: Project;

}