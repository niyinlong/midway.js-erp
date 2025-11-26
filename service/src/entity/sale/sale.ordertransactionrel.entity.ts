import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN payment_transaction AND sale_order
 */
@Entity('sale_order_transaction_rel')
export class SaleOrderTransactionRel {
  @Column({
    type: 'int'
  })
  transaction_id: number;

  // @ManyToOne(() => Transaction)
  // @JoinColumn({ name: 'transaction_id' })
  // transaction: Transaction;

  @Column({
    type: 'int'
  })
  sale_order_id: number;

  // @ManyToOne(() => SaleOrder)
  // @JoinColumn({ name: 'sale_order_id' })
  // sale_order: SaleOrder;

}