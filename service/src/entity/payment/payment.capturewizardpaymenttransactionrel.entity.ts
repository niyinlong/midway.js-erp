import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN payment_capture_wizard AND payment_transaction
 */
@Entity('payment_capture_wizard_payment_transaction_rel')
export class PaymentCaptureWizardPaymentTransactionRel {
  @Column({
    type: 'int'
  })
  payment_capture_wizard_id: number;

  // @ManyToOne(() => PaymentCaptureWizard)
  // @JoinColumn({ name: 'payment_capture_wizard_id' })
  // payment_capture_wizard: PaymentCaptureWizard;

  @Column({
    type: 'int'
  })
  payment_transaction_id: number;

  // @ManyToOne(() => PaymentTransaction)
  // @JoinColumn({ name: 'payment_transaction_id' })
  // payment_transaction: PaymentTransaction;

}