import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Payment Methods
 */
@Entity('account_payment_method_line')
export class AccountPaymentMethodLine {
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
   * Payment Method
   */
  @Column({
    type: 'int'
  })
  payment_method_id: number;

  // @ManyToOne(() => PaymentMethod)
  // @JoinColumn({ name: 'payment_method_id' })
  // payment_method: PaymentMethod;

  /**
   * Payment Account
   */
  @Column({
    type: 'int'
  })
  payment_account_id: number;

  // @ManyToOne(() => PaymentAccount)
  // @JoinColumn({ name: 'payment_account_id' })
  // payment_account: PaymentAccount;

  /**
   * Journal
   */
  @Column({
    type: 'int'
  })
  journal_id: number;

  // @ManyToOne(() => Journal)
  // @JoinColumn({ name: 'journal_id' })
  // journal: Journal;

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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

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
   * Payment Provider
   */
  @Column({
    type: 'int'
  })
  payment_provider_id: number;

  // @ManyToOne(() => PaymentProvider)
  // @JoinColumn({ name: 'payment_provider_id' })
  // payment_provider: PaymentProvider;

}