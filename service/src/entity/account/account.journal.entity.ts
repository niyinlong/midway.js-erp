import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Journal
 */
@Entity('account_journal')
export class AccountJournal {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Alias
   */
  @Column({
    type: 'int'
  })
  alias_id: number;

  // @ManyToOne(() => Alias)
  // @JoinColumn({ name: 'alias_id' })
  // alias: Alias;

  /**
   * Default Account
   */
  @Column({
    type: 'int'
  })
  default_account_id: number;

  // @ManyToOne(() => DefaultAccount)
  // @JoinColumn({ name: 'default_account_id' })
  // default_account: DefaultAccount;

  /**
   * Suspense Account
   */
  @Column({
    type: 'int'
  })
  suspense_account_id: number;

  // @ManyToOne(() => SuspenseAccount)
  // @JoinColumn({ name: 'suspense_account_id' })
  // suspense_account: SuspenseAccount;

  /**
   * Private Share Account
   */
  @Column({
    type: 'int'
  })
  non_deductible_account_id: number;

  // @ManyToOne(() => NonDeductibleAccount)
  // @JoinColumn({ name: 'non_deductible_account_id' })
  // non_deductible_account: NonDeductibleAccount;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Invoice report
   */
  @Column({
    type: 'int'
  })
  invoice_template_pdf_report_id: number;

  // @ManyToOne(() => InvoiceTemplatePdfReport)
  // @JoinColumn({ name: 'invoice_template_pdf_report_id' })
  // invoice_template_pdf_report: InvoiceTemplatePdfReport;

  /**
   * Profit Account
   */
  @Column({
    type: 'int'
  })
  profit_account_id: number;

  // @ManyToOne(() => ProfitAccount)
  // @JoinColumn({ name: 'profit_account_id' })
  // profit_account: ProfitAccount;

  /**
   * Loss Account
   */
  @Column({
    type: 'int'
  })
  loss_account_id: number;

  // @ManyToOne(() => LossAccount)
  // @JoinColumn({ name: 'loss_account_id' })
  // loss_account: LossAccount;

  /**
   * Bank Account
   */
  @Column({
    type: 'int'
  })
  bank_account_id: number;

  // @ManyToOne(() => BankAccount)
  // @JoinColumn({ name: 'bank_account_id' })
  // bank_account: BankAccount;

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
   * Color Index
   */
  @Column({
    type: 'int'
  })
  color: number;

  /**
   * Security Token
   */
  @Column({
    type: 'varchar'
  })
  access_token: string;

  /**
   * Sequence Prefix
   */
  @Column({
    type: 'varchar'
  })
  code: string;

  /**
   * Type
   */
  @Column({
    type: 'varchar'
  })
  type: string;

  /**
   * Communication Type
   */
  @Column({
    type: 'varchar'
  })
  invoice_reference_type: string;

  /**
   * Communication Standard
   */
  @Column({
    type: 'varchar'
  })
  invoice_reference_model: string;

  /**
   * Bank Feeds
   */
  @Column({
    type: 'varchar'
  })
  bank_statements_source: string;

  /**
   * Invoice Notifications
   */
  @Column({
    type: 'varchar'
  })
  incoming_einvoice_notification_email: string;

  /**
   * Journal Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Sequence Override Regex
   */
  @Column({
    type: 'varchar'
  })
  sequence_override_regex: string;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Self Billing
   */
  @Column({
    type: 'boolean'
  })
  is_self_billing: boolean;

  /**
   * Secure Posted Entries with Hash
   */
  @Column({
    type: 'boolean'
  })
  restrict_mode_hash_table: boolean;

  /**
   * Dedicated Credit Note Sequence
   */
  @Column({
    type: 'boolean'
  })
  refund_sequence: boolean;

  /**
   * Dedicated Payment Sequence
   */
  @Column({
    type: 'boolean'
  })
  payment_sequence: boolean;

  /**
   * Show journal on dashboard
   */
  @Column({
    type: 'boolean'
  })
  show_on_dashboard: boolean;

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