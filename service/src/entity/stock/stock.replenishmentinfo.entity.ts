import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Stock supplier replenishment information
 */
@Entity('stock_replenishment_info')
export class StockReplenishmentInfo {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Orderpoint
   */
  @Column({
    type: 'int'
  })
  orderpoint_id: number;

  // @ManyToOne(() => Orderpoint)
  // @JoinColumn({ name: 'orderpoint_id' })
  // orderpoint: Orderpoint;

  /**
   * Percent Factor
   */
  @Column({
    type: 'int'
  })
  percent_factor: number;

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
   * Based on
   */
  @Column({
    type: 'varchar'
  })
  based_on: string;

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