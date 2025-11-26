import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Pay
 */
@Entity('account_payment_register')
export class AccountPaymentRegister {
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
   * Recipient Bank Account
   */
  @Column({
    type: 'int'
  })
  partner_bank_id: number;

  // @ManyToOne(() => PartnerBank)
  // @JoinColumn({ name: 'partner_bank_id' })
  // partner_bank: PartnerBank;

  /**
   * Custom User Currency
   */
  @Column({
    type: 'int'
  })
  custom_user_currency_id: number;

  // @ManyToOne(() => CustomUserCurrency)
  // @JoinColumn({ name: 'custom_user_currency_id' })
  // custom_user_currency: CustomUserCurrency;

  /**
   * Source Currency
   */
  @Column({
    type: 'int'
  })
  source_currency_id: number;

  // @ManyToOne(() => SourceCurrency)
  // @JoinColumn({ name: 'source_currency_id' })
  // source_currency: SourceCurrency;

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
   * Customer/Vendor
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * Payment Method
   */
  @Column({
    type: 'int'
  })
  payment_method_line_id: number;

  // @ManyToOne(() => PaymentMethodLine)
  // @JoinColumn({ name: 'payment_method_line_id' })
  // payment_method_line: PaymentMethodLine;

  /**
   * Difference Account
   */
  @Column({
    type: 'int'
  })
  writeoff_account_id: number;

  // @ManyToOne(() => WriteoffAccount)
  // @JoinColumn({ name: 'writeoff_account_id' })
  // writeoff_account: WriteoffAccount;

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
   * Memo
   */
  @Column({
    type: 'varchar'
  })
  communication: string;

  /**
   * Installments Mode
   */
  @Column({
    type: 'varchar'
  })
  installments_mode: string;

  /**
   * Payment Type
   */
  @Column({
    type: 'varchar'
  })
  payment_type: string;

  /**
   * Partner Type
   */
  @Column({
    type: 'varchar'
  })
  partner_type: string;

  /**
   * Payment Difference Handling
   */
  @Column({
    type: 'varchar'
  })
  payment_difference_handling: string;

  /**
   * Journal Item Label
   */
  @Column({
    type: 'varchar'
  })
  writeoff_label: string;

  /**
   * Payment Date
   */
  @Column({
    type: 'datetime'
  })
  payment_date: Date;

  /**
   * Amount
   */
  @Column({
    type: 'int'
  })
  amount: number;

  /**
   * Custom User Amount
   */
  @Column({
    type: 'int'
  })
  custom_user_amount: number;

  /**
   * Amount to Pay (company currency)
   */
  @Column({
    type: 'int'
  })
  source_amount: number;

  /**
   * Amount to Pay (foreign currency)
   */
  @Column({
    type: 'int'
  })
  source_amount_currency: number;

  /**
   * Group Payments
   */
  @Column({
    type: 'boolean'
  })
  group_payment: boolean;

  /**
   * Can Edit Wizard
   */
  @Column({
    type: 'boolean'
  })
  can_edit_wizard: boolean;

  /**
   * Can Group Payments
   */
  @Column({
    type: 'boolean'
  })
  can_group_payments: boolean;

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
   * Saved payment token
   */
  @Column({
    type: 'int'
  })
  payment_token_id: number;

  // @ManyToOne(() => PaymentToken)
  // @JoinColumn({ name: 'payment_token_id' })
  // payment_token: PaymentToken;

}