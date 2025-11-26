import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Product Moves (Stock Move Line)
 */
@Entity('stock_move_line')
export class StockMoveLine {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Stock Operation
   */
  @Column({
    type: 'int'
  })
  move_id: number;

  // @ManyToOne(() => Move)
  // @JoinColumn({ name: 'move_id' })
  // move: Move;

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
  product_uom_id: number;

  // @ManyToOne(() => ProductUom)
  // @JoinColumn({ name: 'product_uom_id' })
  // product_uom: ProductUom;

  /**
   * Source Package
   */
  @Column({
    type: 'int'
  })
  package_id: number;

  // @ManyToOne(() => Package)
  // @JoinColumn({ name: 'package_id' })
  // package: Package;

  /**
   * Lot/Serial Number
   */
  @Column({
    type: 'int'
  })
  lot_id: number;

  // @ManyToOne(() => Lot)
  // @JoinColumn({ name: 'lot_id' })
  // lot: Lot;

  /**
   * Destination Package
   */
  @Column({
    type: 'int'
  })
  result_package_id: number;

  // @ManyToOne(() => ResultPackage)
  // @JoinColumn({ name: 'result_package_id' })
  // result_package: ResultPackage;

  /**
   * Package History
   */
  @Column({
    type: 'int'
  })
  package_history_id: number;

  // @ManyToOne(() => PackageHistory)
  // @JoinColumn({ name: 'package_history_id' })
  // package_history: PackageHistory;

  /**
   * From Owner
   */
  @Column({
    type: 'int'
  })
  owner_id: number;

  // @ManyToOne(() => Owner)
  // @JoinColumn({ name: 'owner_id' })
  // owner: Owner;

  /**
   * From
   */
  @Column({
    type: 'int'
  })
  location_id: number;

  // @ManyToOne(() => Location)
  // @JoinColumn({ name: 'location_id' })
  // location: Location;

  /**
   * To
   */
  @Column({
    type: 'int'
  })
  location_dest_id: number;

  // @ManyToOne(() => LocationDest)
  // @JoinColumn({ name: 'location_dest_id' })
  // location_dest: LocationDest;

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
   * Lot/Serial Number Name
   */
  @Column({
    type: 'varchar'
  })
  lot_name: string;

  /**
   * Status
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Quantity
   */
  @Column({
    type: 'int'
  })
  quantity: number;

  /**
   * Quantity in Product UoM
   */
  @Column({
    type: 'int'
  })
  quantity_product_uom: number;

  /**
   * Picked
   */
  @Column({
    type: 'boolean'
  })
  picked: boolean;

  /**
   * Is added through entire package
   */
  @Column({
    type: 'boolean'
  })
  is_entire_pack: boolean;

  /**
   * Date
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

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
   * Work Order
   */
  @Column({
    type: 'int'
  })
  workorder_id: number;

  // @ManyToOne(() => Workorder)
  // @JoinColumn({ name: 'workorder_id' })
  // workorder: Workorder;

  /**
   * Production Order
   */
  @Column({
    type: 'int'
  })
  production_id: number;

  // @ManyToOne(() => Production)
  // @JoinColumn({ name: 'production_id' })
  // production: Production;

}