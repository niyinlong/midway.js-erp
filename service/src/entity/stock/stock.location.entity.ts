import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Inventory Locations
 */
@Entity('stock_location')
export class StockLocation {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Parent Location
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
   * Removal Strategy
   */
  @Column({
    type: 'int'
  })
  removal_strategy_id: number;

  // @ManyToOne(() => RemovalStrategy)
  // @JoinColumn({ name: 'removal_strategy_id' })
  // removal_strategy: RemovalStrategy;

  /**
   * Inventory Frequency
   */
  @Column({
    type: 'int'
  })
  cyclic_inventory_frequency: number;

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
   * Storage Category
   */
  @Column({
    type: 'int'
  })
  storage_category_id: number;

  // @ManyToOne(() => StorageCategory)
  // @JoinColumn({ name: 'storage_category_id' })
  // storage_category: StorageCategory;

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
   * Location Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Full Location Name
   */
  @Column({
    type: 'varchar'
  })
  complete_name: string;

  /**
   * Location Type
   */
  @Column({
    type: 'varchar'
  })
  usage: string;

  /**
   * Parent Path
   */
  @Column({
    type: 'varchar'
  })
  parent_path: string;

  /**
   * Barcode
   */
  @Column({
    type: 'varchar'
  })
  barcode: string;

  /**
   * Last Inventory
   */
  @Column({
    type: 'datetime'
  })
  last_inventory_date: Date;

  /**
   * Next Expected
   */
  @Column({
    type: 'datetime'
  })
  next_inventory_date: Date;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Replenishments
   */
  @Column({
    type: 'boolean'
  })
  replenish_location: boolean;

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
   * Stock Valuation Account
   */
  @Column({
    type: 'int'
  })
  valuation_account_id: number;

  // @ManyToOne(() => ValuationAccount)
  // @JoinColumn({ name: 'valuation_account_id' })
  // valuation_account: ValuationAccount;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}