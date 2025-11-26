import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Sales Advance Payment Invoice
 */
@Entity('sale_advance_payment_inv')
export class SaleAdvancePaymentInv {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Currency
   */
  @Column({
    type: 'int'
  })
  currency_id: number;

  // @ManyToOne(() => Currency)
  // @JoinColumn({ name: 'currency_id' })
  // currency: Currency;

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
   * Create Invoice
   */
  @Column({
    type: 'varchar'
  })
  advance_payment_method: string;

  /**
   * Down Payment Amount (Fixed)
   */
  @Column({
    type: 'int'
  })
  fixed_amount: number;

  /**
   * Deduct down payments
   */
  @Column({
    type: 'boolean'
  })
  deduct_down_payments: boolean;

  /**
   * Consolidated Billing
   */
  @Column({
    type: 'boolean'
  })
  consolidated_billing: boolean;

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
   * Down Payment
   */
  @Column({
    type: 'varchar'
  })
  amount: string;

}