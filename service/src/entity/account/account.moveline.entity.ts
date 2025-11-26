import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Journal Item
 */
@Entity('account_move_line')
export class AccountMoveLine {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Journal Entry
   */
  @Column({
    type: 'int'
  })
  move_id: number;

  // @ManyToOne(() => Move)
  // @JoinColumn({ name: 'move_id' })
  // move: Move;

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
   * Company Currency
   */
  @Column({
    type: 'int'
  })
  company_currency_id: number;

  // @ManyToOne(() => CompanyCurrency)
  // @JoinColumn({ name: 'company_currency_id' })
  // company_currency: CompanyCurrency;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Account
   */
  @Column({
    type: 'int'
  })
  account_id: number;

  // @ManyToOne(() => Account)
  // @JoinColumn({ name: 'account_id' })
  // account: Account;

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
   * Reconciliation Model
   */
  @Column({
    type: 'int'
  })
  reconcile_model_id: number;

  // @ManyToOne(() => ReconcileModel)
  // @JoinColumn({ name: 'reconcile_model_id' })
  // reconcile_model: ReconcileModel;

  /**
   * Originator Payment
   */
  @Column({
    type: 'int'
  })
  payment_id: number;

  // @ManyToOne(() => Payment)
  // @JoinColumn({ name: 'payment_id' })
  // payment: Payment;

  /**
   * Originator Statement Line
   */
  @Column({
    type: 'int'
  })
  statement_line_id: number;

  // @ManyToOne(() => StatementLine)
  // @JoinColumn({ name: 'statement_line_id' })
  // statement_line: StatementLine;

  /**
   * Statement
   */
  @Column({
    type: 'int'
  })
  statement_id: number;

  // @ManyToOne(() => Statement)
  // @JoinColumn({ name: 'statement_id' })
  // statement: Statement;

  /**
   * Originator Group of Taxes
   */
  @Column({
    type: 'int'
  })
  group_tax_id: number;

  // @ManyToOne(() => GroupTax)
  // @JoinColumn({ name: 'group_tax_id' })
  // group_tax: GroupTax;

  /**
   * Originator Tax
   */
  @Column({
    type: 'int'
  })
  tax_line_id: number;

  // @ManyToOne(() => TaxLine)
  // @JoinColumn({ name: 'tax_line_id' })
  // tax_line: TaxLine;

  /**
   * Originator tax group
   */
  @Column({
    type: 'int'
  })
  tax_group_id: number;

  // @ManyToOne(() => TaxGroup)
  // @JoinColumn({ name: 'tax_group_id' })
  // tax_group: TaxGroup;

  /**
   * Originator Tax Distribution Line
   */
  @Column({
    type: 'int'
  })
  tax_repartition_line_id: number;

  // @ManyToOne(() => TaxRepartitionLine)
  // @JoinColumn({ name: 'tax_repartition_line_id' })
  // tax_repartition_line: TaxRepartitionLine;

  /**
   * Matching
   */
  @Column({
    type: 'int'
  })
  full_reconcile_id: number;

  // @ManyToOne(() => FullReconcile)
  // @JoinColumn({ name: 'full_reconcile_id' })
  // full_reconcile: FullReconcile;

  /**
   * Product
   */
  @Column({
    type: 'int'
  })
  product_id: number;

  // @ManyToOne(() => Product)
  // @JoinColumn({ name: 'product_id' })
  // product: Product;

  /**
   * Unit
   */
  @Column({
    type: 'int'
  })
  product_uom_id: number;

  // @ManyToOne(() => ProductUom)
  // @JoinColumn({ name: 'product_uom_id' })
  // product_uom: ProductUom;

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
   * Number
   */
  @Column({
    type: 'varchar'
  })
  move_name: string;

  /**
   * Status
   */
  @Column({
    type: 'varchar'
  })
  parent_state: string;

  /**
   * Reference
   */
  @Column({
    type: 'varchar'
  })
  ref: string;

  /**
   * Label
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Matching #
   */
  @Column({
    type: 'varchar'
  })
  matching_number: string;

  /**
   * Display Type
   */
  @Column({
    type: 'varchar'
  })
  display_type: string;

  /**
   * Date
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

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
  date_maturity: Date;

  /**
   * Discount Date
   */
  @Column({
    type: 'datetime'
  })
  discount_date: Date;

  /**
   * Analytic Distribution
   */
  @Column({
    type: 'jsonb'
  })
  analytic_distribution: object;

  /**
   * Extra Tax Data
   */
  @Column({
    type: 'jsonb'
  })
  extra_tax_data: object;

  /**
   * Debit
   */
  @Column({
    type: 'int'
  })
  debit: number;

  /**
   * Credit
   */
  @Column({
    type: 'int'
  })
  credit: number;

  /**
   * Balance
   */
  @Column({
    type: 'int'
  })
  balance: number;

  /**
   * Amount in Currency
   */
  @Column({
    type: 'int'
  })
  amount_currency: number;

  /**
   * Base Amount
   */
  @Column({
    type: 'int'
  })
  tax_base_amount: number;

  /**
   * Residual Amount
   */
  @Column({
    type: 'int'
  })
  amount_residual: number;

  /**
   * Residual Amount in Currency
   */
  @Column({
    type: 'int'
  })
  amount_residual_currency: number;

  /**
   * Quantity
   */
  @Column({
    type: 'int'
  })
  quantity: number;

  /**
   * Unit Price
   */
  @Column({
    type: 'int'
  })
  price_unit: number;

  /**
   * Subtotal
   */
  @Column({
    type: 'int'
  })
  price_subtotal: number;

  /**
   * Total
   */
  @Column({
    type: 'int'
  })
  price_total: number;

  /**
   * Discount (%)
   */
  @Column({
    type: 'int'
  })
  discount: number;

  /**
   * Discount amount in Currency
   */
  @Column({
    type: 'int'
  })
  discount_amount_currency: number;

  /**
   * Discount Balance
   */
  @Column({
    type: 'int'
  })
  discount_balance: number;

  /**
   * Company Storno Accounting
   */
  @Column({
    type: 'boolean'
  })
  is_storno: boolean;

  /**
   * Is Imported
   */
  @Column({
    type: 'boolean'
  })
  is_imported: boolean;

  /**
   * Reconciled
   */
  @Column({
    type: 'boolean'
  })
  reconciled: boolean;

  /**
   * Hide Composition
   */
  @Column({
    type: 'boolean'
  })
  collapse_composition: boolean;

  /**
   * Hide Prices
   */
  @Column({
    type: 'boolean'
  })
  collapse_prices: boolean;

  /**
   * No Follow-Up
   */
  @Column({
    type: 'boolean'
  })
  no_followup: boolean;

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
   * Deductibility
   */
  @Column({
    type: 'varchar'
  })
  deductible_amount: string;

  /**
   * Is Downpayment
   */
  @Column({
    type: 'boolean'
  })
  is_downpayment: boolean;

  /**
   * Cogs Origin
   */
  @Column({
    type: 'int'
  })
  cogs_origin_id: number;

  // @ManyToOne(() => CogsOrigin)
  // @JoinColumn({ name: 'cogs_origin_id' })
  // cogs_origin: CogsOrigin;

  /**
   * Purchase Order Line
   */
  @Column({
    type: 'int'
  })
  purchase_line_id: number;

  // @ManyToOne(() => PurchaseLine)
  // @JoinColumn({ name: 'purchase_line_id' })
  // purchase_line: PurchaseLine;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}