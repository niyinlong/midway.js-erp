import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Stock Move
 */
@Entity('stock_move')
export class StockMove {
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
   * Unit
   */
  @Column({
    type: 'int'
  })
  product_uom: number;

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
   * Intermediate Location
   */
  @Column({
    type: 'int'
  })
  location_dest_id: number;

  // @ManyToOne(() => LocationDest)
  // @JoinColumn({ name: 'location_dest_id' })
  // location_dest: LocationDest;

  /**
   * Final Location
   */
  @Column({
    type: 'int'
  })
  location_final_id: number;

  // @ManyToOne(() => LocationFinal)
  // @JoinColumn({ name: 'location_final_id' })
  // location_final: LocationFinal;

  /**
   * Destination Address 
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * Transfer
   */
  @Column({
    type: 'int'
  })
  picking_id: number;

  // @ManyToOne(() => Picking)
  // @JoinColumn({ name: 'picking_id' })
  // picking: Picking;

  /**
   * Scrap operation
   */
  @Column({
    type: 'int'
  })
  scrap_id: number;

  // @ManyToOne(() => Scrap)
  // @JoinColumn({ name: 'scrap_id' })
  // scrap: Scrap;

  /**
   * Stock Rule
   */
  @Column({
    type: 'int'
  })
  rule_id: number;

  // @ManyToOne(() => Rule)
  // @JoinColumn({ name: 'rule_id' })
  // rule: Rule;

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
   * Origin return move
   */
  @Column({
    type: 'int'
  })
  origin_returned_move_id: number;

  // @ManyToOne(() => OriginReturnedMove)
  // @JoinColumn({ name: 'origin_returned_move_id' })
  // origin_returned_move: OriginReturnedMove;

  /**
   * Owner 
   */
  @Column({
    type: 'int'
  })
  restrict_partner_id: number;

  // @ManyToOne(() => RestrictPartner)
  // @JoinColumn({ name: 'restrict_partner_id' })
  // restrict_partner: RestrictPartner;

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
   * Number of SN/Lots
   */
  @Column({
    type: 'int'
  })
  next_serial_count: number;

  /**
   * Original Reordering Rule
   */
  @Column({
    type: 'int'
  })
  orderpoint_id: number;

  // @ManyToOne(() => Orderpoint)
  // @JoinColumn({ name: 'orderpoint_id' })
  // orderpoint: Orderpoint;

  /**
   * Packaging
   */
  @Column({
    type: 'int'
  })
  packaging_uom_id: number;

  // @ManyToOne(() => PackagingUom)
  // @JoinColumn({ name: 'packaging_uom_id' })
  // packaging_uom: PackagingUom;

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
   * Priority
   */
  @Column({
    type: 'varchar'
  })
  priority: string;

  /**
   * Status
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Source Document
   */
  @Column({
    type: 'varchar'
  })
  origin: string;

  /**
   * Supply Method
   */
  @Column({
    type: 'varchar'
  })
  procure_method: string;

  /**
   * Inventory Name
   */
  @Column({
    type: 'varchar'
  })
  inventory_name: string;

  /**
   * Reference
   */
  @Column({
    type: 'varchar'
  })
  reference: string;

  /**
   * First SN/Lot
   */
  @Column({
    type: 'varchar'
  })
  next_serial: string;

  /**
   * Date to Reserve
   */
  @Column({
    type: 'datetime'
  })
  reservation_date: Date;

  /**
   * Description Picking Manual
   */
  @Column({
    type: 'varchar'
  })
  description_picking_manual: string;

  /**
   * Real Quantity
   */
  @Column({
    type: 'int'
  })
  product_qty: number;

  /**
   * Demand
   */
  @Column({
    type: 'int'
  })
  product_uom_qty: number;

  /**
   * Quantity
   */
  @Column({
    type: 'int'
  })
  quantity: number;

  /**
   * Picked
   */
  @Column({
    type: 'boolean'
  })
  picked: boolean;

  /**
   * Propagate cancel and split
   */
  @Column({
    type: 'boolean'
  })
  propagate_cancel: boolean;

  /**
   * Inventory
   */
  @Column({
    type: 'boolean'
  })
  is_inventory: boolean;

  /**
   * Whether the move was added after the picking''s confirmation
   */
  @Column({
    type: 'boolean'
  })
  additional: boolean;

  /**
   * Date Scheduled
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

  /**
   * Deadline
   */
  @Column({
    type: 'datetime'
  })
  date_deadline: Date;

  /**
   * Delay Alert Date
   */
  @Column({
    type: 'datetime'
  })
  delay_alert_date: Date;

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
   * Unit Price
   */
  @Column({
    type: 'varchar'
  })
  price_unit: string;

  /**
   * Packaging Quantity
   */
  @Column({
    type: 'varchar'
  })
  packaging_uom_qty: string;

  /**
   * stock_move_id
   */
  @Column({
    type: 'int'
  })
  account_move_id: number;

  // @ManyToOne(() => AccountMove)
  // @JoinColumn({ name: 'account_move_id' })
  // account_move: AccountMove;

  /**
   * Value
   */
  @Column({
    type: 'int'
  })
  value: number;

  /**
   * Update quantities on SO/PO
   */
  @Column({
    type: 'boolean'
  })
  to_refund: boolean;

  /**
   * Is Incoming (valued)
   */
  @Column({
    type: 'boolean'
  })
  is_in: boolean;

  /**
   * Is Outgoing (valued)
   */
  @Column({
    type: 'boolean'
  })
  is_out: boolean;

  /**
   * Is Dropship
   */
  @Column({
    type: 'boolean'
  })
  is_dropship: boolean;

  /**
   * Sale Line
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
  unit_factor: string;

  @Column({
    type: 'boolean'
  })
  manual_consumption: boolean;

  /**
   * Created Production Order
   */
  @Column({
    type: 'int'
  })
  created_production_id: number;

  // @ManyToOne(() => CreatedProduction)
  // @JoinColumn({ name: 'created_production_id' })
  // created_production: CreatedProduction;

  /**
   * Production Order for finished products
   */
  @Column({
    type: 'int'
  })
  production_id: number;

  // @ManyToOne(() => Production)
  // @JoinColumn({ name: 'production_id' })
  // production: Production;

  /**
   * Production Order for components
   */
  @Column({
    type: 'int'
  })
  raw_material_production_id: number;

  // @ManyToOne(() => RawMaterialProduction)
  // @JoinColumn({ name: 'raw_material_production_id' })
  // raw_material_production: RawMaterialProduction;

  /**
   * Used for Productions
   */
  @Column({
    type: 'int'
  })
  production_group_id: number;

  // @ManyToOne(() => ProductionGroup)
  // @JoinColumn({ name: 'production_group_id' })
  // production_group: ProductionGroup;

  /**
   * Disassembly Order
   */
  @Column({
    type: 'int'
  })
  unbuild_id: number;

  // @ManyToOne(() => Unbuild)
  // @JoinColumn({ name: 'unbuild_id' })
  // unbuild: Unbuild;

  /**
   * Consumed Disassembly Order
   */
  @Column({
    type: 'int'
  })
  consume_unbuild_id: number;

  // @ManyToOne(() => ConsumeUnbuild)
  // @JoinColumn({ name: 'consume_unbuild_id' })
  // consume_unbuild: ConsumeUnbuild;

  /**
   * Operation To Consume
   */
  @Column({
    type: 'int'
  })
  operation_id: number;

  // @ManyToOne(() => Operation)
  // @JoinColumn({ name: 'operation_id' })
  // operation: Operation;

  /**
   * Work Order To Consume
   */
  @Column({
    type: 'int'
  })
  workorder_id: number;

  // @ManyToOne(() => Workorder)
  // @JoinColumn({ name: 'workorder_id' })
  // workorder: Workorder;

  /**
   * BoM Line
   */
  @Column({
    type: 'int'
  })
  bom_line_id: number;

  // @ManyToOne(() => BomLine)
  // @JoinColumn({ name: 'bom_line_id' })
  // bom_line: BomLine;

  /**
   * By-products
   */
  @Column({
    type: 'int'
  })
  byproduct_id: number;

  // @ManyToOne(() => Byproduct)
  // @JoinColumn({ name: 'byproduct_id' })
  // byproduct: Byproduct;

  /**
   * Cost Share (%)
   */
  @Column({
    type: 'int'
  })
  cost_share: number;

  /**
   * Purchase Order Line
   */
  @Column({
    type: 'int'
  })
  purchase_line_id: number;

  // @ManyToOne(() => PurchaseLine)
  // @JoinColumn({ name: 'purchase_line_id' })
  // purchase_line: PurchaseLine;

}