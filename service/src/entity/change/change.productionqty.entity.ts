import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Change Production Qty
 */
@Entity('change_production_qty')
export class ChangeProductionQty {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Manufacturing Order
   */
  @Column({
    type: 'int'
  })
  mo_id: number;

  // @ManyToOne(() => Mo)
  // @JoinColumn({ name: 'mo_id' })
  // mo: Mo;

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
   * Quantity To Produce
   */
  @Column({
    type: 'int'
  })
  product_qty: number;

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