import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Journal Entry
 */
@Entity('account_move')
export class AccountMove {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sequence Number
   */
  @Column({
    type: 'int'
  })
  sequence_number: number;

  /**
   * Main Attachment
   */
  @Column({
    type: 'int'
  })
  message_main_attachment_id: number;

  // @ManyToOne(() => MessageMainAttachment)
  // @JoinColumn({ name: 'message_main_attachment_id' })
  // message_main_attachment: MessageMainAttachment;

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
   * Payment
   */
  @Column({
    type: 'int'
  })
  origin_payment_id: number;

  // @ManyToOne(() => OriginPayment)
  // @JoinColumn({ name: 'origin_payment_id' })
  // origin_payment: OriginPayment;

  /**
   * Statement Line
   */
  @Column({
    type: 'int'
  })
  statement_line_id: number;

  // @ManyToOne(() => StatementLine)
  // @JoinColumn({ name: 'statement_line_id' })
  // statement_line: StatementLine;

  /**
   * Tax Cash Basis Entry of
   */
  @Column({
    type: 'int'
  })
  tax_cash_basis_rec_id: number;

  // @ManyToOne(() => TaxCashBasisRec)
  // @JoinColumn({ name: 'tax_cash_basis_rec_id' })
  // tax_cash_basis_rec: TaxCashBasisRec;

  /**
   * Cash Basis Origin
   */
  @Column({
    type: 'int'
  })
  tax_cash_basis_origin_move_id: number;

  // @ManyToOne(() => TaxCashBasisOriginMove)
  // @JoinColumn({ name: 'tax_cash_basis_origin_move_id' })
  // tax_cash_basis_origin_move: TaxCashBasisOriginMove;

  /**
   * First recurring entry
   */
  @Column({
    type: 'int'
  })
  auto_post_origin_id: number;

  // @ManyToOne(() => AutoPostOrigin)
  // @JoinColumn({ name: 'auto_post_origin_id' })
  // auto_post_origin: AutoPostOrigin;

  /**
   * Inalterability No Gap Sequence #
   */
  @Column({
    type: 'int'
  })
  secure_sequence_number: number;

  /**
   * Payment Terms
   */
  @Column({
    type: 'int'
  })
  invoice_payment_term_id: number;

  // @ManyToOne(() => InvoicePaymentTerm)
  // @JoinColumn({ name: 'invoice_payment_term_id' })
  // invoice_payment_term: InvoicePaymentTerm;

  /**
   * Partner
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * Commercial Entity
   */
  @Column({
    type: 'int'
  })
  commercial_partner_id: number;

  // @ManyToOne(() => CommercialPartner)
  // @JoinColumn({ name: 'commercial_partner_id' })
  // commercial_partner: CommercialPartner;

  /**
   * Delivery Address
   */
  @Column({
    type: 'int'
  })
  partner_shipping_id: number;

  // @ManyToOne(() => PartnerShipping)
  // @JoinColumn({ name: 'partner_shipping_id' })
  // partner_shipping: PartnerShipping;

  /**
   * Recipient Bank
   */
  @Column({
    type: 'int'
  })
  partner_bank_id: number;

  // @ManyToOne(() => PartnerBank)
  // @JoinColumn({ name: 'partner_bank_id' })
  // partner_bank: PartnerBank;

  /**
   * Fiscal Position
   */
  @Column({
    type: 'int'
  })
  fiscal_position_id: number;

  // @ManyToOne(() => FiscalPosition)
  // @JoinColumn({ name: 'fiscal_position_id' })
  // fiscal_position: FiscalPosition;

  /**
   * Preferred Payment Method Line
   */
  @Column({
    type: 'int'
  })
  preferred_payment_method_line_id: number;

  // @ManyToOne(() => PreferredPaymentMethodLine)
  // @JoinColumn({ name: 'preferred_payment_method_line_id' })
  // preferred_payment_method_line: PreferredPaymentMethodLine;

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
   * Reversal of
   */
  @Column({
    type: 'int'
  })
  reversed_entry_id: number;

  // @ManyToOne(() => ReversedEntry)
  // @JoinColumn({ name: 'reversed_entry_id' })
  // reversed_entry: ReversedEntry;

  /**
   * Salesperson
   */
  @Column({
    type: 'int'
  })
  invoice_user_id: number;

  // @ManyToOne(() => InvoiceUser)
  // @JoinColumn({ name: 'invoice_user_id' })
  // invoice_user: InvoiceUser;

  /**
   * Incoterm
   */
  @Column({
    type: 'int'
  })
  invoice_incoterm_id: number;

  // @ManyToOne(() => InvoiceIncoterm)
  // @JoinColumn({ name: 'invoice_incoterm_id' })
  // invoice_incoterm: InvoiceIncoterm;

  /**
   * Cash Rounding Method
   */
  @Column({
    type: 'int'
  })
  invoice_cash_rounding_id: number;

  // @ManyToOne(() => InvoiceCashRounding)
  // @JoinColumn({ name: 'invoice_cash_rounding_id' })
  // invoice_cash_rounding: InvoiceCashRounding;

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
   * Sequence Prefix
   */
  @Column({
    type: 'varchar'
  })
  sequence_prefix: string;

  /**
   * Security Token
   */
  @Column({
    type: 'varchar'
  })
  access_token: string;

  /**
   * Number
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Reference
   */
  @Column({
    type: 'varchar'
  })
  ref: string;

  /**
   * Status
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Type
   */
  @Column({
    type: 'varchar'
  })
  move_type: string;

  /**
   * Auto-post
   */
  @Column({
    type: 'varchar'
  })
  auto_post: string;

  /**
   * Inalterability Hash
   */
  @Column({
    type: 'varchar'
  })
  inalterable_hash: string;

  /**
   * Payment Reference
   */
  @Column({
    type: 'varchar'
  })
  payment_reference: string;

  /**
   * Payment QR-code
   */
  @Column({
    type: 'varchar'
  })
  qr_code_method: string;

  /**
   * Payment Status
   */
  @Column({
    type: 'varchar'
  })
  payment_state: string;

  /**
   * Source Email
   */
  @Column({
    type: 'varchar'
  })
  invoice_source_email: string;

  /**
   * Invoice Partner Display Name
   */
  @Column({
    type: 'varchar'
  })
  invoice_partner_display_name: string;

  /**
   * Origin
   */
  @Column({
    type: 'varchar'
  })
  invoice_origin: string;

  /**
   * Incoterm Location
   */
  @Column({
    type: 'varchar'
  })
  incoterm_location: string;

  /**
   * Date
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

  /**
   * Auto-post until
   */
  @Column({
    type: 'datetime'
  })
  auto_post_until: Date;

  /**
   * Invoice/Bill Date
   */
  @Column({
    type: 'datetime'
  })
  invoice_date: Date;

  /**
   * Due Date
   */
  @Column({
    type: 'datetime'
  })
  invoice_date_due: Date;

  /**
   * Delivery Date
   */
  @Column({
    type: 'datetime'
  })
  delivery_date: Date;

  /**
   * Taxable Supply Date
   */
  @Column({
    type: 'datetime'
  })
  taxable_supply_date: Date;

  /**
   * Sending Data
   */
  @Column({
    type: 'jsonb'
  })
  sending_data: object;

  /**
   * Terms and Conditions
   */
  @Column({
    type: 'varchar'
  })
  narration: string;

  /**
   * Currency Rate
   */
  @Column({
    type: 'int'
  })
  invoice_currency_rate: number;

  /**
   * Untaxed Amount
   */
  @Column({
    type: 'int'
  })
  amount_untaxed: number;

  /**
   * Tax
   */
  @Column({
    type: 'int'
  })
  amount_tax: number;

  /**
   * Total
   */
  @Column({
    type: 'int'
  })
  amount_total: number;

  /**
   * Amount Due
   */
  @Column({
    type: 'int'
  })
  amount_residual: number;

  /**
   * Untaxed Amount Signed
   */
  @Column({
    type: 'int'
  })
  amount_untaxed_signed: number;

  /**
   * Untaxed Amount Signed Currency
   */
  @Column({
    type: 'int'
  })
  amount_untaxed_in_currency_signed: number;

  /**
   * Tax Signed
   */
  @Column({
    type: 'int'
  })
  amount_tax_signed: number;

  /**
   * Total Signed
   */
  @Column({
    type: 'int'
  })
  amount_total_signed: number;

  /**
   * Total in Currency Signed
   */
  @Column({
    type: 'int'
  })
  amount_total_in_currency_signed: number;

  /**
   * Amount Due Signed
   */
  @Column({
    type: 'int'
  })
  amount_residual_signed: number;

  /**
   * Total (Tax inc.)
   */
  @Column({
    type: 'int'
  })
  quick_edit_total_amount: number;

  /**
   * Always Tax Exigible
   */
  @Column({
    type: 'boolean'
  })
  always_tax_exigible: boolean;

  /**
   * Reviewed
   */
  @Column({
    type: 'boolean'
  })
  checked: boolean;

  /**
   * Posted Before
   */
  @Column({
    type: 'boolean'
  })
  posted_before: boolean;

  /**
   * Made Sequence Gap
   */
  @Column({
    type: 'boolean'
  })
  made_sequence_gap: boolean;

  /**
   * Is Manually Modified
   */
  @Column({
    type: 'boolean'
  })
  is_manually_modified: boolean;

  /**
   * Is Move Sent
   */
  @Column({
    type: 'boolean'
  })
  is_move_sent: boolean;

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
   * Fapiao Number
   */
  @Column({
    type: 'varchar'
  })
  fapiao: string;

  /**
   * Campaign
   */
  @Column({
    type: 'int'
  })
  campaign_id: number;

  // @ManyToOne(() => Campaign)
  // @JoinColumn({ name: 'campaign_id' })
  // campaign: Campaign;

  /**
   * Source
   */
  @Column({
    type: 'int'
  })
  source_id: number;

  // @ManyToOne(() => Source)
  // @JoinColumn({ name: 'source_id' })
  // source: Source;

  /**
   * Medium
   */
  @Column({
    type: 'int'
  })
  medium_id: number;

  // @ManyToOne(() => Medium)
  // @JoinColumn({ name: 'medium_id' })
  // medium: Medium;

  /**
   * Sales Team
   */
  @Column({
    type: 'int'
  })
  team_id: number;

  // @ManyToOne(() => Team)
  // @JoinColumn({ name: 'team_id' })
  // team: Team;

}