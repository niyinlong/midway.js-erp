import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Quants
 */
@Entity('stock_quant')
export class StockQuant {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Owner
   */
  @Column({
    type: 'int'
  })
  owner_id: number;

  // @ManyToOne(() => Owner)
  // @JoinColumn({ name: 'owner_id' })
  // owner: Owner;

  /**
   * Assigned To
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

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
   * Scheduled
   */
  @Column({
    type: 'datetime'
  })
  inventory_date: Date;

  /**
   * Quantity
   */
  @Column({
    type: 'int'
  })
  quantity: number;

  /**
   * Reserved Quantity
   */
  @Column({
    type: 'int'
  })
  reserved_quantity: number;

  /**
   * Counted
   */
  @Column({
    type: 'int'
  })
  inventory_quantity: number;

  /**
   * Difference
   */
  @Column({
    type: 'int'
  })
  inventory_diff_quantity: number;

  /**
   * Inventory Quantity Set
   */
  @Column({
    type: 'boolean'
  })
  inventory_quantity_set: boolean;

  /**
   * Incoming Date
   */
  @Column({
    type: 'datetime'
  })
  in_date: Date;

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
   * Accounting Date
   */
  @Column({
    type: 'datetime'
  })
  accounting_date: Date;

}