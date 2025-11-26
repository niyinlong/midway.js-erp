import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Snooze Orderpoint
 */
@Entity('stock_orderpoint_snooze')
export class StockOrderpointSnooze {
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
   * Snooze for
   */
  @Column({
    type: 'varchar'
  })
  predefined_date: string;

  /**
   * Snooze Date
   */
  @Column({
    type: 'datetime'
  })
  snoozed_until: Date;

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