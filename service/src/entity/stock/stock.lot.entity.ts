import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Lot/Serial
 */
@Entity('stock_lot')
export class StockLot {
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
   * Lot/Serial Number
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Internal Reference
   */
  @Column({
    type: 'varchar'
  })
  ref: string;

  /**
   * Properties
   */
  @Column({
    type: 'jsonb'
  })
  lot_properties: object;

  /**
   * Description
   */
  @Column({
    type: 'varchar'
  })
  note: string;

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
   * Cost
   */
  @Column({
    type: 'jsonb'
  })
  standard_price: object;

  /**
   * Average Cost
   */
  @Column({
    type: 'int'
  })
  avg_cost: number;

}