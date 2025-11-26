import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Payment Terms Line
 */
@Entity('account_payment_term_line')
export class AccountPaymentTermLine {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Days
   */
  @Column({
    type: 'int'
  })
  nb_days: number;

  /**
   * Payment Terms
   */
  @Column({
    type: 'int'
  })
  payment_id: number;

  // @ManyToOne(() => Payment)
  // @JoinColumn({ name: 'payment_id' })
  // payment: Payment;

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
   * Value
   */
  @Column({
    type: 'varchar'
  })
  value: string;

  /**
   * Delay Type
   */
  @Column({
    type: 'varchar'
  })
  delay_type: string;

  /**
   * Days on the next month
   */
  @Column({
    type: 'varchar'
  })
  days_next_month: string;

  /**
   * Due
   */
  @Column({
    type: 'int'
  })
  value_amount: number;

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