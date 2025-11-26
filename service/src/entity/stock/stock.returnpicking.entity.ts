import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Return Picking
 */
@Entity('stock_return_picking')
export class StockReturnPicking {
  @PrimaryGeneratedColumn()
  id: number;

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