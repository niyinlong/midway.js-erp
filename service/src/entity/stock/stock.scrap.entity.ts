import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Scrap
 */
@Entity('stock_scrap')
export class StockScrap {
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
   * Lot/Serial
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
   * Picking
   */
  @Column({
    type: 'int'
  })
  picking_id: number;

  // @ManyToOne(() => Picking)
  // @JoinColumn({ name: 'picking_id' })
  // picking: Picking;

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
   * Scrap Location
   */
  @Column({
    type: 'int'
  })
  scrap_location_id: number;

  // @ManyToOne(() => ScrapLocation)
  // @JoinColumn({ name: 'scrap_location_id' })
  // scrap_location: ScrapLocation;

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
  scrap_qty: number;

  /**
   * Replenish Quantities
   */
  @Column({
    type: 'boolean'
  })
  should_replenish: boolean;

  /**
   * Date
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

  /**
   * Manufacturing Order
   */
  @Column({
    type: 'int'
  })
  production_id: number;

  // @ManyToOne(() => Production)
  // @JoinColumn({ name: 'production_id' })
  // production: Production;

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
   * Kit
   */
  @Column({
    type: 'int'
  })
  bom_id: number;

  // @ManyToOne(() => Bom)
  // @JoinColumn({ name: 'bom_id' })
  // bom: Bom;

}