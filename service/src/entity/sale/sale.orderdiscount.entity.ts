import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Discount Wizard
 */
@Entity('sale_order_discount')
export class SaleOrderDiscount {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sale Order
   */
  @Column({
    type: 'int'
  })
  sale_order_id: number;

  // @ManyToOne(() => SaleOrder)
  // @JoinColumn({ name: 'sale_order_id' })
  // sale_order: SaleOrder;

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
   * Discount Type
   */
  @Column({
    type: 'varchar'
  })
  discount_type: string;

  /**
   * Amount
   */
  @Column({
    type: 'int'
  })
  discount_amount: number;

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
   * Percentage
   */
  @Column({
    type: 'varchar'
  })
  discount_percentage: string;

}