import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Backorder Confirmation Line
 */
@Entity('stock_backorder_confirmation_line')
export class StockBackorderConfirmationLine {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Immediate Transfer
   */
  @Column({
    type: 'int'
  })
  backorder_confirmation_id: number;

  // @ManyToOne(() => BackorderConfirmation)
  // @JoinColumn({ name: 'backorder_confirmation_id' })
  // backorder_confirmation: BackorderConfirmation;

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
   * To Backorder
   */
  @Column({
    type: 'boolean'
  })
  to_backorder: boolean;

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