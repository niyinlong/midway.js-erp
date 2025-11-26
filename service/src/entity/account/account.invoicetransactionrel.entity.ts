import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_move AND payment_transaction
 */
@Entity('account_invoice_transaction_rel')
export class AccountInvoiceTransactionRel {
  @Column({
    type: 'int'
  })
  invoice_id: number;

  // @ManyToOne(() => Invoice)
  // @JoinColumn({ name: 'invoice_id' })
  // invoice: Invoice;

  @Column({
    type: 'int'
  })
  transaction_id: number;

  // @ManyToOne(() => Transaction)
  // @JoinColumn({ name: 'transaction_id' })
  // transaction: Transaction;

}