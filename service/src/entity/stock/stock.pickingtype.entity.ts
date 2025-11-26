import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Picking Type
 */
@Entity('stock_picking_type')
export class StockPickingType {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Color
   */
  @Column({
    type: 'int'
  })
  color: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Reference Sequence
   */
  @Column({
    type: 'int'
  })
  sequence_id: number;

  // @ManyToOne(() => Sequence)
  // @JoinColumn({ name: 'sequence_id' })
  // sequence: Sequence;

  /**
   * Source Location
   */
  @Column({
    type: 'int'
  })
  default_location_src_id: number;

  // @ManyToOne(() => DefaultLocationSrc)
  // @JoinColumn({ name: 'default_location_src_id' })
  // default_location_src: DefaultLocationSrc;

  /**
   * Destination Location
   */
  @Column({
    type: 'int'
  })
  default_location_dest_id: number;

  // @ManyToOne(() => DefaultLocationDest)
  // @JoinColumn({ name: 'default_location_dest_id' })
  // default_location_dest: DefaultLocationDest;

  /**
   * Operation Type for Returns
   */
  @Column({
    type: 'int'
  })
  return_picking_type_id: number;

  // @ManyToOne(() => ReturnPickingType)
  // @JoinColumn({ name: 'return_picking_type_id' })
  // return_picking_type: ReturnPickingType;

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
   * Days
   */
  @Column({
    type: 'int'
  })
  reservation_days_before: number;

  /**
   * Days when starred
   */
  @Column({
    type: 'int'
  })
  reservation_days_before_priority: number;

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
   * Sequence Prefix
   */
  @Column({
    type: 'varchar'
  })
  sequence_code: string;

  /**
   * Type of Operation
   */
  @Column({
    type: 'varchar'
  })
  code: string;

  /**
   * Reservation Method
   */
  @Column({
    type: 'varchar'
  })
  reservation_method: string;

  /**
   * Product Label Format to auto-print
   */
  @Column({
    type: 'varchar'
  })
  product_label_format: string;

  /**
   * Lot Label Format to auto-print
   */
  @Column({
    type: 'varchar'
  })
  lot_label_format: string;

  /**
   * Package Label to Print
   */
  @Column({
    type: 'varchar'
  })
  package_label_to_print: string;

  /**
   * Barcode
   */
  @Column({
    type: 'varchar'
  })
  barcode: string;

  /**
   * Create Backorder
   */
  @Column({
    type: 'varchar'
  })
  create_backorder: string;

  /**
   * Shipping Policy
   */
  @Column({
    type: 'varchar'
  })
  move_type: string;

  /**
   * Operation Type
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Picking Properties
   */
  @Column({
    type: 'jsonb'
  })
  picking_properties_definition: object;

  /**
   * Move Entire Packages
   */
  @Column({
    type: 'boolean'
  })
  show_entire_packs: boolean;

  /**
   * Set Package Type
   */
  @Column({
    type: 'boolean'
  })
  set_package_type: boolean;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Create New Lots/Serial Numbers
   */
  @Column({
    type: 'boolean'
  })
  use_create_lots: boolean;

  /**
   * Use Existing Lots/Serial Numbers
   */
  @Column({
    type: 'boolean'
  })
  use_existing_lots: boolean;

  /**
   * Generate Shipping Labels
   */
  @Column({
    type: 'boolean'
  })
  print_label: boolean;

  /**
   * Show Detailed Operations
   */
  @Column({
    type: 'boolean'
  })
  show_operations: boolean;

  /**
   * Show Reception Report at Validation
   */
  @Column({
    type: 'boolean'
  })
  auto_show_reception_report: boolean;

  /**
   * Auto Print Delivery Slip
   */
  @Column({
    type: 'boolean'
  })
  auto_print_delivery_slip: boolean;

  /**
   * Auto Print Return Slip
   */
  @Column({
    type: 'boolean'
  })
  auto_print_return_slip: boolean;

  /**
   * Auto Print Product Labels
   */
  @Column({
    type: 'boolean'
  })
  auto_print_product_labels: boolean;

  /**
   * Auto Print Lot/SN Labels
   */
  @Column({
    type: 'boolean'
  })
  auto_print_lot_labels: boolean;

  /**
   * Auto Print Reception Report
   */
  @Column({
    type: 'boolean'
  })
  auto_print_reception_report: boolean;

  /**
   * Auto Print Reception Report Labels
   */
  @Column({
    type: 'boolean'
  })
  auto_print_reception_report_labels: boolean;

  /**
   * Auto Print Packages
   */
  @Column({
    type: 'boolean'
  })
  auto_print_packages: boolean;

  /**
   * Auto Print Package Label
   */
  @Column({
    type: 'boolean'
  })
  auto_print_package_label: boolean;

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
   * Analytic Costs
   */
  @Column({
    type: 'boolean'
  })
  analytic_costs: boolean;

  /**
   * Product Label to Print
   */
  @Column({
    type: 'varchar'
  })
  mrp_product_label_to_print: string;

  /**
   * Lot/SN Label to Print
   */
  @Column({
    type: 'varchar'
  })
  done_mrp_lot_label_to_print: string;

  /**
   * Generated Lot/SN Label to Print
   */
  @Column({
    type: 'varchar'
  })
  generated_mrp_lot_label_to_print: string;

  /**
   * Create New Lots/Serial Numbers for Components
   */
  @Column({
    type: 'boolean'
  })
  use_create_components_lots: boolean;

  /**
   * Auto Print Done Production Order
   */
  @Column({
    type: 'boolean'
  })
  auto_print_done_production_order: boolean;

  /**
   * Auto Print Produced Product Labels
   */
  @Column({
    type: 'boolean'
  })
  auto_print_done_mrp_product_labels: boolean;

  /**
   * Auto Print Produced Lot Label
   */
  @Column({
    type: 'boolean'
  })
  auto_print_done_mrp_lot: boolean;

  /**
   * Auto Print Allocation Report
   */
  @Column({
    type: 'boolean'
  })
  auto_print_mrp_reception_report: boolean;

  /**
   * Auto Print Allocation Report Labels
   */
  @Column({
    type: 'boolean'
  })
  auto_print_mrp_reception_report_labels: boolean;

  /**
   * Auto Print Generated Lot/SN Label
   */
  @Column({
    type: 'boolean'
  })
  auto_print_generated_mrp_lot: boolean;

}