import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN sale_advance_payment_inv AND sale_order
 */
@Entity('sale_advance_payment_inv_sale_order_rel')
export class SaleAdvancePaymentInvSaleOrderRel {
  @Column({
    type: 'int'
  })
  sale_advance_payment_inv_id: number;

  // @ManyToOne(() => SaleAdvancePaymentInv)
  // @JoinColumn({ name: 'sale_advance_payment_inv_id' })
  // sale_advance_payment_inv: SaleAdvancePaymentInv;

  @Column({
    type: 'int'
  })
  sale_order_id: number;

  // @ManyToOne(() => SaleOrder)
  // @JoinColumn({ name: 'sale_order_id' })
  // sale_order: SaleOrder;

}