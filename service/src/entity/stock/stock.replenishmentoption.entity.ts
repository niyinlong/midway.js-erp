import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Stock warehouse replenishment option
 */
@Entity('stock_replenishment_option')
export class StockReplenishmentOption {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Replenishment Info
   */
  @Column({
    type: 'int'
  })
  replenishment_info_id: number;

  // @ManyToOne(() => ReplenishmentInfo)
  // @JoinColumn({ name: 'replenishment_info_id' })
  // replenishment_info: ReplenishmentInfo;

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

}