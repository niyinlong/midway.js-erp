import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_move AND account_payment
 */
@Entity('account_move__account_payment')
export class AccountMoveAccountPayment {
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
  payment_id: number;

  // @ManyToOne(() => Payment)
  // @JoinColumn({ name: 'payment_id' })
  // payment: Payment;

}