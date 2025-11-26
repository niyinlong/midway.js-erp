import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Manufacturing Order
 */
@Entity('mrp_production')
export class MrpProduction {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Backorder Sequence
   */
  @Column({
    type: 'int'
  })
  backorder_sequence: number;

  /**
   * Product
   */
  @Column({
    type: 'int'
  })
  product_id: number;

  // @ManyToOne(() => Product)
  // @JoinColumn({ name: 'product_id' })
  // product: Product;

  /**
   * Production Group
   */
  @Column({
    type: 'int'
  })
  production_group_id: number;

  // @ManyToOne(() => ProductionGroup)
  // @JoinColumn({ name: 'production_group_id' })
  // production_group: ProductionGroup;

  /**
   * Unit
   */
  @Column({
    type: 'int'
  })
  product_uom_id: number;

  // @ManyToOne(() => ProductUom)
  // @JoinColumn({ name: 'product_uom_id' })
  // product_uom: ProductUom;

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
   * Components Location
   */
  @Column({
    type: 'int'
  })
  location_src_id: number;

  // @ManyToOne(() => LocationSrc)
  // @JoinColumn({ name: 'location_src_id' })
  // location_src: LocationSrc;

  /**
   * Finished Products Location
   */
  @Column({
    type: 'int'
  })
  location_dest_id: number;

  // @ManyToOne(() => LocationDest)
  // @JoinColumn({ name: 'location_dest_id' })
  // location_dest: LocationDest;

  /**
   * Final Location from procurement
   */
  @Column({
    type: 'int'
  })
  location_final_id: number;

  // @ManyToOne(() => LocationFinal)
  // @JoinColumn({ name: 'location_final_id' })
  // location_final: LocationFinal;

  /**
   * Bill of Material
   */
  @Column({
    type: 'int'
  })
  bom_id: number;

  // @ManyToOne(() => Bom)
  // @JoinColumn({ name: 'bom_id' })
  // bom: Bom;

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
   * Orderpoint
   */
  @Column({
    type: 'int'
  })
  orderpoint_id: number;

  // @ManyToOne(() => Orderpoint)
  // @JoinColumn({ name: 'orderpoint_id' })
  // orderpoint: Orderpoint;

  /**
   * Production Location
   */
  @Column({
    type: 'int'
  })
  production_location_id: number;

  // @ManyToOne(() => ProductionLocation)
  // @JoinColumn({ name: 'production_location_id' })
  // production_location: ProductionLocation;

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
   * Priority
   */
  @Column({
    type: 'varchar'
  })
  priority: string;

  /**
   * Source
   */
  @Column({
    type: 'varchar'
  })
  origin: string;

  /**
   * State
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * MO Readiness
   */
  @Column({
    type: 'varchar'
  })
  reservation_state: string;

  /**
   * Custom Description
   */
  @Column({
    type: 'varchar'
  })
  product_description_variants: string;

  /**
   * Consumption
   */
  @Column({
    type: 'varchar'
  })
  consumption: string;

  /**
   * Quantity To Produce
   */
  @Column({
    type: 'int'
  })
  product_qty: number;

  /**
   * Quantity Producing
   */
  @Column({
    type: 'int'
  })
  qty_producing: number;

  /**
   * Propagate cancel and split
   */
  @Column({
    type: 'boolean'
  })
  propagate_cancel: boolean;

  /**
   * Is Locked
   */
  @Column({
    type: 'boolean'
  })
  is_locked: boolean;

  /**
   * Its Operations are Planned
   */
  @Column({
    type: 'boolean'
  })
  is_planned: boolean;

  /**
   * Allow Work Order Dependencies
   */
  @Column({
    type: 'boolean'
  })
  allow_workorder_dependencies: boolean;

  /**
   * Outdated BoM
   */
  @Column({
    type: 'boolean'
  })
  is_outdated_bom: boolean;

  /**
   * Deadline
   */
  @Column({
    type: 'datetime'
  })
  date_deadline: Date;

  /**
   * Start
   */
  @Column({
    type: 'datetime'
  })
  date_start: Date;

  /**
   * End
   */
  @Column({
    type: 'datetime'
  })
  date_finished: Date;

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
   * Total Quantity
   */
  @Column({
    type: 'varchar'
  })
  product_uom_qty: string;

  /**
   * Extra Unit Cost
   */
  @Column({
    type: 'varchar'
  })
  extra_cost: string;

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

  /**
   * Origin sale order line
   */
  @Column({
    type: 'int'
  })
  sale_line_id: number;

  // @ManyToOne(() => SaleLine)
  // @JoinColumn({ name: 'sale_line_id' })
  // sale_line: SaleLine;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}