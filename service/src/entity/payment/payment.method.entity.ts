import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Payment Method
 */
@Entity('payment_method')
export class PaymentMethod {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Primary Payment Method
   */
  @Column({
    type: 'int'
  })
  primary_payment_method_id: number;

  // @ManyToOne(() => PrimaryPaymentMethod)
  // @JoinColumn({ name: 'primary_payment_method_id' })
  // primary_payment_method: PrimaryPaymentMethod;

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
   * Code
   */
  @Column({
    type: 'varchar'
  })
  code: string;

  /**
   * Manual Capture
   */
  @Column({
    type: 'varchar'
  })
  support_manual_capture: string;

  /**
   * Refund
   */
  @Column({
    type: 'varchar'
  })
  support_refund: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Tokenization
   */
  @Column({
    type: 'boolean'
  })
  support_tokenization: boolean;

  /**
   * Express Checkout
   */
  @Column({
    type: 'boolean'
  })
  support_express_checkout: boolean;

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