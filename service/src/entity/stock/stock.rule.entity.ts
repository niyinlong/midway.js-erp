import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Stock Rule
 */
@Entity('stock_rule')
export class StockRule {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Source Location
   */
  @Column({
    type: 'int'
  })
  location_src_id: number;

  // @ManyToOne(() => LocationSrc)
  // @JoinColumn({ name: 'location_src_id' })
  // location_src: LocationSrc;

  /**
   * Route
   */
  @Column({
    type: 'int'
  })
  route_id: number;

  // @ManyToOne(() => Route)
  // @JoinColumn({ name: 'route_id' })
  // route: Route;

  /**
   * Route Sequence
   */
  @Column({
    type: 'int'
  })
  route_sequence: number;

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
   * Lead Time
   */
  @Column({
    type: 'int'
  })
  delay: number;

  /**
   * Partner Address
   */
  @Column({
    type: 'int'
  })
  partner_address_id: number;

  // @ManyToOne(() => PartnerAddress)
  // @JoinColumn({ name: 'partner_address_id' })
  // partner_address: PartnerAddress;

  /**
   * Warehouse
   */
  @Column({
    type: 'int'
  })
  warehouse_id: number;

  // @ManyToOne(() => Warehouse)
  // @JoinColumn({ name: 'warehouse_id' })
  // warehouse: Warehouse;

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
   * Action
   */
  @Column({
    type: 'varchar'
  })
  action: string;

  /**
   * Supply Method
   */
  @Column({
    type: 'varchar'
  })
  procure_method: string;

  /**
   * Automatic Move
   */
  @Column({
    type: 'varchar'
  })
  auto: string;

  /**
   * Push Applicability
   */
  @Column({
    type: 'varchar'
  })
  push_domain: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Destination location origin from rule
   */
  @Column({
    type: 'boolean'
  })
  location_dest_from_rule: boolean;

  /**
   * Cancel Next Move
   */
  @Column({
    type: 'boolean'
  })
  propagate_cancel: boolean;

  /**
   * Propagation of carrier
   */
  @Column({
    type: 'boolean'
  })
  propagate_carrier: boolean;

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