import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Warn Insufficient Scrap Quantity
 */
@Entity('stock_warn_insufficient_qty_scrap')
export class StockWarnInsufficientQtyScrap {
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
   * Scrap
   */
  @Column({
    type: 'int'
  })
  scrap_id: number;

  // @ManyToOne(() => Scrap)
  // @JoinColumn({ name: 'scrap_id' })
  // scrap: Scrap;

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
   * Unit
   */
  @Column({
    type: 'varchar'
  })
  product_uom_name: string;

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
   * Quantity
   */
  @Column({
    type: 'varchar'
  })
  quantity: string;

}