import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Inventory Adjustment Reference / Reason
 */
@Entity('stock_inventory_adjustment_name')
export class StockInventoryAdjustmentName {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Inventory Reason
   */
  @Column({
    type: 'varchar'
  })
  inventory_adjustment_name: string;

  /**
   * Counting Date
   */
  @Column({
    type: 'datetime'
  })
  counting_date: Date;

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