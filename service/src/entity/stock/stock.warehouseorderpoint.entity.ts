import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Minimum Inventory Rule
 */
@Entity('stock_warehouse_orderpoint')
export class StockWarehouseOrderpoint {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Multiple
   */
  @Column({
    type: 'int'
  })
  replenishment_uom_id: number;

  // @ManyToOne(() => ReplenishmentUom)
  // @JoinColumn({ name: 'replenishment_uom_id' })
  // replenishment_uom: ReplenishmentUom;

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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Trigger
   */
  @Column({
    type: 'varchar'
  })
  trigger: string;

  /**
   * Snoozed
   */
  @Column({
    type: 'datetime'
  })
  snoozed_until: Date;

  /**
   * Deadline
   */
  @Column({
    type: 'datetime'
  })
  deadline_date: Date;

  /**
   * Min Quantity
   */
  @Column({
    type: 'int'
  })
  product_min_qty: number;

  /**
   * Max Quantity
   */
  @Column({
    type: 'int'
  })
  product_max_qty: number;

  /**
   * To Order Computed
   */
  @Column({
    type: 'int'
  })
  qty_to_order_computed: number;

  /**
   * To Order Manual
   */
  @Column({
    type: 'int'
  })
  qty_to_order_manual: number;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

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
   * Bill of Materials
   */
  @Column({
    type: 'int'
  })
  bom_id: number;

  // @ManyToOne(() => Bom)
  // @JoinColumn({ name: 'bom_id' })
  // bom: Bom;

  /**
   * Vendor Pricelist
   */
  @Column({
    type: 'int'
  })
  supplier_id: number;

  // @ManyToOne(() => Supplier)
  // @JoinColumn({ name: 'supplier_id' })
  // supplier: Supplier;

}