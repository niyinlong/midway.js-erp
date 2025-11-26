import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Payment Terms
 */
@Entity('account_payment_term')
export class AccountPaymentTerm {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Discount Days
   */
  @Column({
    type: 'int'
  })
  discount_days: number;

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
   * Cash Discount Tax Reduction
   */
  @Column({
    type: 'varchar'
  })
  early_pay_discount_computation: string;

  /**
   * Payment Terms
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Description on the Invoice
   */
  @Column({
    type: 'jsonb'
  })
  note: object;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Show installment dates
   */
  @Column({
    type: 'boolean'
  })
  display_on_invoice: boolean;

  /**
   * Early Discount
   */
  @Column({
    type: 'boolean'
  })
  early_discount: boolean;

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
   * Discount %
   */
  @Column({
    type: 'varchar'
  })
  discount_percentage: string;

}