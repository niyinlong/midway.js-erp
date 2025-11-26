import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Payment Capture Wizard
 */
@Entity('payment_capture_wizard')
export class PaymentCaptureWizard {
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
   * Amount To Capture
   */
  @Column({
    type: 'int'
  })
  amount_to_capture: number;

  /**
   * Void Remaining Amount
   */
  @Column({
    type: 'boolean'
  })
  void_remaining_amount: boolean;

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