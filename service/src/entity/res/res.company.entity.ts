import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('res_company')
export class ResCompany {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar'
  })
  name: string;

  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  @Column({
    type: 'int'
  })
  currency_id: number;

  // @ManyToOne(() => Currency)
  // @JoinColumn({ name: 'currency_id' })
  // currency: Currency;

  @Column({
    type: 'int'
  })
  sequence: number;

  @Column({
    type: 'datetime'
  })
  create_date: Date;

  @Column({
    type: 'varchar'
  })
  parent_path: string;

  /**
   * Parent Company
   */
  @Column({
    type: 'int'
  })
  parent_id: number;

  // @ManyToOne(() => Parent)
  // @JoinColumn({ name: 'parent_id' })
  // parent: Parent;

  /**
   * Paper format
   */
  @Column({
    type: 'int'
  })
  paperformat_id: number;

  // @ManyToOne(() => Paperformat)
  // @JoinColumn({ name: 'paperformat_id' })
  // paperformat: Paperformat;

  /**
   * Document Template
   */
  @Column({
    type: 'int'
  })
  external_report_layout_id: number;

  // @ManyToOne(() => ExternalReportLayout)
  // @JoinColumn({ name: 'external_report_layout_id' })
  // external_report_layout: ExternalReportLayout;

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
   * Email
   */
  @Column({
    type: 'varchar'
  })
  email: string;

  /**
   * Phone
   */
  @Column({
    type: 'varchar'
  })
  phone: string;

  /**
   * Font
   */
  @Column({
    type: 'varchar'
  })
  font: string;

  /**
   * Primary Color
   */
  @Column({
    type: 'varchar'
  })
  primary_color: string;

  /**
   * Secondary Color
   */
  @Column({
    type: 'varchar'
  })
  secondary_color: string;

  /**
   * Layout Background
   */
  @Column({
    type: 'varchar'
  })
  layout_background: string;

  /**
   * Company Tagline
   */
  @Column({
    type: 'jsonb'
  })
  report_header: object;

  /**
   * Report Footer
   */
  @Column({
    type: 'jsonb'
  })
  report_footer: object;

  /**
   * Company Details
   */
  @Column({
    type: 'jsonb'
  })
  company_details: object;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Uses Default Logo
   */
  @Column({
    type: 'boolean'
  })
  uses_default_logo: boolean;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

  /**
   * Logo Web
   */
  @Column({
    type: 'bytea'
  })
  logo_web: Buffer;

  /**
   * Default Working Hours
   */
  @Column({
    type: 'int'
  })
  resource_calendar_id: number;

  // @ManyToOne(() => ResourceCalendar)
  // @JoinColumn({ name: 'resource_calendar_id' })
  // resource_calendar: ResourceCalendar;

  /**
   * Email Domain
   */
  @Column({
    type: 'int'
  })
  alias_domain_id: number;

  // @ManyToOne(() => AliasDomain)
  // @JoinColumn({ name: 'alias_domain_id' })
  // alias_domain: AliasDomain;

  /**
   * Email Button Text
   */
  @Column({
    type: 'varchar'
  })
  email_primary_color: string;

  /**
   * Email Button Color
   */
  @Column({
    type: 'varchar'
  })
  email_secondary_color: string;

  /**
   * Enrich Done
   */
  @Column({
    type: 'boolean'
  })
  iap_enrich_auto_done: boolean;

  /**
   * Snailmail Color
   */
  @Column({
    type: 'boolean'
  })
  snailmail_color: boolean;

  /**
   * Add a Cover Page
   */
  @Column({
    type: 'boolean'
  })
  snailmail_cover: boolean;

  /**
   * Both sides
   */
  @Column({
    type: 'boolean'
  })
  snailmail_duplex: boolean;

  /**
   * Fiscalyear Last Day
   */
  @Column({
    type: 'int'
  })
  fiscalyear_last_day: number;

  /**
   * Inter-Banks Transfer Account
   */
  @Column({
    type: 'int'
  })
  transfer_account_id: number;

  // @ManyToOne(() => TransferAccount)
  // @JoinColumn({ name: 'transfer_account_id' })
  // transfer_account: TransferAccount;

  /**
   * Cash Difference Income
   */
  @Column({
    type: 'int'
  })
  default_cash_difference_income_account_id: number;

  // @ManyToOne(() => DefaultCashDifferenceIncomeAccount)
  // @JoinColumn({ name: 'default_cash_difference_income_account_id' })
  // default_cash_difference_income_account: DefaultCashDifferenceIncomeAccount;

  /**
   * Cash Difference Expense
   */
  @Column({
    type: 'int'
  })
  default_cash_difference_expense_account_id: number;

  // @ManyToOne(() => DefaultCashDifferenceExpenseAccount)
  // @JoinColumn({ name: 'default_cash_difference_expense_account_id' })
  // default_cash_difference_expense_account: DefaultCashDifferenceExpenseAccount;

  /**
   * Journal Suspense Account
   */
  @Column({
    type: 'int'
  })
  account_journal_suspense_account_id: number;

  // @ManyToOne(() => AccountJournalSuspenseAccount)
  // @JoinColumn({ name: 'account_journal_suspense_account_id' })
  // account_journal_suspense_account: AccountJournalSuspenseAccount;

  /**
   * Cash Discount Write-Off Gain Account
   */
  @Column({
    type: 'int'
  })
  account_journal_early_pay_discount_gain_account_id: number;

  // @ManyToOne(() => AccountJournalEarlyPayDiscountGainAccount)
  // @JoinColumn({ name: 'account_journal_early_pay_discount_gain_account_id' })
  // account_journal_early_pay_discount_gain_account: AccountJournalEarlyPayDiscountGainAccount;

  /**
   * Cash Discount Write-Off Loss Account
   */
  @Column({
    type: 'int'
  })
  account_journal_early_pay_discount_loss_account_id: number;

  // @ManyToOne(() => AccountJournalEarlyPayDiscountLossAccount)
  // @JoinColumn({ name: 'account_journal_early_pay_discount_loss_account_id' })
  // account_journal_early_pay_discount_loss_account: AccountJournalEarlyPayDiscountLossAccount;

  /**
   * Default Sale Tax
   */
  @Column({
    type: 'int'
  })
  account_sale_tax_id: number;

  // @ManyToOne(() => AccountSaleTax)
  // @JoinColumn({ name: 'account_sale_tax_id' })
  // account_sale_tax: AccountSaleTax;

  /**
   * Default Purchase Tax
   */
  @Column({
    type: 'int'
  })
  account_purchase_tax_id: number;

  // @ManyToOne(() => AccountPurchaseTax)
  // @JoinColumn({ name: 'account_purchase_tax_id' })
  // account_purchase_tax: AccountPurchaseTax;

  /**
   * Default Purchase Receipt Fiscal Position
   */
  @Column({
    type: 'int'
  })
  account_purchase_receipt_fiscal_position_id: number;

  // @ManyToOne(() => AccountPurchaseReceiptFiscalPosition)
  // @JoinColumn({ name: 'account_purchase_receipt_fiscal_position_id' })
  // account_purchase_receipt_fiscal_position: AccountPurchaseReceiptFiscalPosition;

  /**
   * Exchange Gain or Loss Journal
   */
  @Column({
    type: 'int'
  })
  currency_exchange_journal_id: number;

  // @ManyToOne(() => CurrencyExchangeJournal)
  // @JoinColumn({ name: 'currency_exchange_journal_id' })
  // currency_exchange_journal: CurrencyExchangeJournal;

  /**
   * Gain Exchange Rate Account
   */
  @Column({
    type: 'int'
  })
  income_currency_exchange_account_id: number;

  // @ManyToOne(() => IncomeCurrencyExchangeAccount)
  // @JoinColumn({ name: 'income_currency_exchange_account_id' })
  // income_currency_exchange_account: IncomeCurrencyExchangeAccount;

  /**
   * Loss Exchange Rate Account
   */
  @Column({
    type: 'int'
  })
  expense_currency_exchange_account_id: number;

  // @ManyToOne(() => ExpenseCurrencyExchangeAccount)
  // @JoinColumn({ name: 'expense_currency_exchange_account_id' })
  // expense_currency_exchange_account: ExpenseCurrencyExchangeAccount;

  /**
   * Default incoterm
   */
  @Column({
    type: 'int'
  })
  incoterm_id: number;

  // @ManyToOne(() => Incoterm)
  // @JoinColumn({ name: 'incoterm_id' })
  // incoterm: Incoterm;

  /**
   * Batch Payment Sequence
   */
  @Column({
    type: 'int'
  })
  batch_payment_sequence_id: number;

  // @ManyToOne(() => BatchPaymentSequence)
  // @JoinColumn({ name: 'batch_payment_sequence_id' })
  // batch_payment_sequence: BatchPaymentSequence;

  /**
   * Opening Journal Entry
   */
  @Column({
    type: 'int'
  })
  account_opening_move_id: number;

  // @ManyToOne(() => AccountOpeningMove)
  // @JoinColumn({ name: 'account_opening_move_id' })
  // account_opening_move: AccountOpeningMove;

  /**
   * Default PoS Receivable Account
   */
  @Column({
    type: 'int'
  })
  account_default_pos_receivable_account_id: number;

  // @ManyToOne(() => AccountDefaultPosReceivableAccount)
  // @JoinColumn({ name: 'account_default_pos_receivable_account_id' })
  // account_default_pos_receivable_account: AccountDefaultPosReceivableAccount;

  /**
   * Expense Accrual Account
   */
  @Column({
    type: 'int'
  })
  expense_accrual_account_id: number;

  // @ManyToOne(() => ExpenseAccrualAccount)
  // @JoinColumn({ name: 'expense_accrual_account_id' })
  // expense_accrual_account: ExpenseAccrualAccount;

  /**
   * Revenue Accrual Account
   */
  @Column({
    type: 'int'
  })
  revenue_accrual_account_id: number;

  // @ManyToOne(() => RevenueAccrualAccount)
  // @JoinColumn({ name: 'revenue_accrual_account_id' })
  // revenue_accrual_account: RevenueAccrualAccount;

  /**
   * Automatic Entry Default Journal
   */
  @Column({
    type: 'int'
  })
  automatic_entry_default_journal_id: number;

  // @ManyToOne(() => AutomaticEntryDefaultJournal)
  // @JoinColumn({ name: 'automatic_entry_default_journal_id' })
  // automatic_entry_default_journal: AutomaticEntryDefaultJournal;

  /**
   * Domestic Fiscal Position
   */
  @Column({
    type: 'int'
  })
  domestic_fiscal_position_id: number;

  // @ManyToOne(() => DomesticFiscalPosition)
  // @JoinColumn({ name: 'domestic_fiscal_position_id' })
  // domestic_fiscal_position: DomesticFiscalPosition;

  /**
   * Fiscal Country
   */
  @Column({
    type: 'int'
  })
  account_fiscal_country_id: number;

  // @ManyToOne(() => AccountFiscalCountry)
  // @JoinColumn({ name: 'account_fiscal_country_id' })
  // account_fiscal_country: AccountFiscalCountry;

  /**
   * Cash Basis Journal
   */
  @Column({
    type: 'int'
  })
  tax_cash_basis_journal_id: number;

  // @ManyToOne(() => TaxCashBasisJournal)
  // @JoinColumn({ name: 'tax_cash_basis_journal_id' })
  // tax_cash_basis_journal: TaxCashBasisJournal;

  /**
   * Base Tax Received Account
   */
  @Column({
    type: 'int'
  })
  account_cash_basis_base_account_id: number;

  // @ManyToOne(() => AccountCashBasisBaseAccount)
  // @JoinColumn({ name: 'account_cash_basis_base_account_id' })
  // account_cash_basis_base_account: AccountCashBasisBaseAccount;

  /**
   * Separate account for income discount
   */
  @Column({
    type: 'int'
  })
  account_discount_income_allocation_id: number;

  // @ManyToOne(() => AccountDiscountIncomeAllocation)
  // @JoinColumn({ name: 'account_discount_income_allocation_id' })
  // account_discount_income_allocation: AccountDiscountIncomeAllocation;

  /**
   * Separate account for expense discount
   */
  @Column({
    type: 'int'
  })
  account_discount_expense_allocation_id: number;

  // @ManyToOne(() => AccountDiscountExpenseAllocation)
  // @JoinColumn({ name: 'account_discount_expense_allocation_id' })
  // account_discount_expense_allocation: AccountDiscountExpenseAllocation;

  /**
   * Income Account
   */
  @Column({
    type: 'int'
  })
  income_account_id: number;

  // @ManyToOne(() => IncomeAccount)
  // @JoinColumn({ name: 'income_account_id' })
  // income_account: IncomeAccount;

  /**
   * Expense Account
   */
  @Column({
    type: 'int'
  })
  expense_account_id: number;

  // @ManyToOne(() => ExpenseAccount)
  // @JoinColumn({ name: 'expense_account_id' })
  // expense_account: ExpenseAccount;

  /**
   * Price Difference Account
   */
  @Column({
    type: 'int'
  })
  price_difference_account_id: number;

  // @ManyToOne(() => PriceDifferenceAccount)
  // @JoinColumn({ name: 'price_difference_account_id' })
  // price_difference_account: PriceDifferenceAccount;

  /**
   * Fiscalyear Last Month
   */
  @Column({
    type: 'varchar'
  })
  fiscalyear_last_month: string;

  /**
   * Chart Template
   */
  @Column({
    type: 'varchar'
  })
  chart_template: string;

  /**
   * Prefix of the bank accounts
   */
  @Column({
    type: 'varchar'
  })
  bank_account_code_prefix: string;

  /**
   * Prefix of the cash accounts
   */
  @Column({
    type: 'varchar'
  })
  cash_account_code_prefix: string;

  /**
   * Prefix of the transfer accounts
   */
  @Column({
    type: 'varchar'
  })
  transfer_account_code_prefix: string;

  /**
   * Tax Calculation Rounding Method
   */
  @Column({
    type: 'varchar'
  })
  tax_calculation_rounding_method: string;

  /**
   * Terms & Conditions format
   */
  @Column({
    type: 'varchar'
  })
  terms_type: string;

  /**
   * Quick encoding
   */
  @Column({
    type: 'varchar'
  })
  quick_edit_mode: string;

  /**
   * Default Sales Price Include
   */
  @Column({
    type: 'varchar'
  })
  account_price_include: string;

  /**
   * Global Lock Date
   */
  @Column({
    type: 'datetime'
  })
  fiscalyear_lock_date: Date;

  /**
   * Tax Return Lock Date
   */
  @Column({
    type: 'datetime'
  })
  tax_lock_date: Date;

  /**
   * Sales Lock Date
   */
  @Column({
    type: 'datetime'
  })
  sale_lock_date: Date;

  /**
   * Purchase Lock date
   */
  @Column({
    type: 'datetime'
  })
  purchase_lock_date: Date;

  /**
   * Hard Lock Date
   */
  @Column({
    type: 'datetime'
  })
  hard_lock_date: Date;

  /**
   * Opening Entry
   */
  @Column({
    type: 'datetime'
  })
  account_opening_date: Date;

  /**
   * Default Terms and Conditions
   */
  @Column({
    type: 'jsonb'
  })
  invoice_terms: object;

  /**
   * Default Terms and Conditions as a Web page
   */
  @Column({
    type: 'jsonb'
  })
  invoice_terms_html: object;

  /**
   * Expects a Chart of Accounts
   */
  @Column({
    type: 'boolean'
  })
  expects_chart_of_accounts: boolean;

  /**
   * Use anglo-saxon accounting
   */
  @Column({
    type: 'boolean'
  })
  anglo_saxon_accounting: boolean;

  /**
   * Display QR-code on invoices
   */
  @Column({
    type: 'boolean'
  })
  qr_code: boolean;

  /**
   * Display Link QR-code
   */
  @Column({
    type: 'boolean'
  })
  link_qr_code: boolean;

  /**
   * Total amount of invoice in letters
   */
  @Column({
    type: 'boolean'
  })
  display_invoice_amount_total_words: boolean;

  /**
   * Taxes in company currency
   */
  @Column({
    type: 'boolean'
  })
  display_invoice_tax_company_currency: boolean;

  /**
   * Sales Credit Limit
   */
  @Column({
    type: 'boolean'
  })
  account_use_credit_limit: boolean;

  /**
   * Use Cash Basis
   */
  @Column({
    type: 'boolean'
  })
  tax_exigibility: boolean;

  /**
   * Storno accounting
   */
  @Column({
    type: 'boolean'
  })
  account_storno: boolean;

  /**
   * Restrictive Audit Trail
   */
  @Column({
    type: 'boolean'
  })
  restrictive_audit_trail: boolean;

  /**
   * Auto-validate bills
   */
  @Column({
    type: 'boolean'
  })
  autopost_bills: boolean;

  /**
   * Default Quotation Validity
   */
  @Column({
    type: 'int'
  })
  quotation_validity_days: number;

  /**
   * Discount Product
   */
  @Column({
    type: 'int'
  })
  sale_discount_product_id: number;

  // @ManyToOne(() => SaleDiscountProduct)
  // @JoinColumn({ name: 'sale_discount_product_id' })
  // sale_discount_product: SaleDiscountProduct;

  /**
   * Downpayment Account
   */
  @Column({
    type: 'int'
  })
  downpayment_account_id: number;

  // @ManyToOne(() => DownpaymentAccount)
  // @JoinColumn({ name: 'downpayment_account_id' })
  // downpayment_account: DownpaymentAccount;

  /**
   * Sale onboarding selected payment method
   */
  @Column({
    type: 'varchar'
  })
  sale_onboarding_payment_method: string;

  /**
   * Online Signature
   */
  @Column({
    type: 'boolean'
  })
  portal_confirmation_sign: boolean;

  /**
   * Online Payment
   */
  @Column({
    type: 'boolean'
  })
  portal_confirmation_pay: boolean;

  /**
   * Prepayment percentage
   */
  @Column({
    type: 'varchar'
  })
  prepayment_percent: string;

  /**
   * Default Sale Template
   */
  @Column({
    type: 'int'
  })
  sale_order_template_id: number;

  // @ManyToOne(() => SaleOrderTemplate)
  // @JoinColumn({ name: 'sale_order_template_id' })
  // sale_order_template: SaleOrderTemplate;

  /**
   * Nomenclature
   */
  @Column({
    type: 'int'
  })
  nomenclature_id: number;

  // @ManyToOne(() => Nomenclature)
  // @JoinColumn({ name: 'nomenclature_id' })
  // nomenclature: Nomenclature;

  /**
   * Internal Transit Location
   */
  @Column({
    type: 'int'
  })
  internal_transit_location_id: number;

  // @ManyToOne(() => InternalTransitLocation)
  // @JoinColumn({ name: 'internal_transit_location_id' })
  // internal_transit_location: InternalTransitLocation;

  /**
   * Email Template confirmation picking
   */
  @Column({
    type: 'int'
  })
  stock_mail_confirmation_template_id: number;

  // @ManyToOne(() => StockMailConfirmationTemplate)
  // @JoinColumn({ name: 'stock_mail_confirmation_template_id' })
  // stock_mail_confirmation_template: StockMailConfirmationTemplate;

  /**
   * Day of the month
   */
  @Column({
    type: 'int'
  })
  annual_inventory_day: number;

  /**
   * Annual Inventory Month
   */
  @Column({
    type: 'varchar'
  })
  annual_inventory_month: string;

  /**
   * Stock Confirmation Type
   */
  @Column({
    type: 'varchar'
  })
  stock_confirmation_type: string;

  /**
   * Email Confirmation picking
   */
  @Column({
    type: 'boolean'
  })
  stock_move_email_validation: boolean;

  /**
   * Stock Text Confirmation
   */
  @Column({
    type: 'boolean'
  })
  stock_text_confirmation: boolean;

  /**
   * Replenishment Horizon
   */
  @Column({
    type: 'varchar'
  })
  horizon_days: string;

  /**
   * Stock Journal
   */
  @Column({
    type: 'int'
  })
  account_stock_journal_id: number;

  // @ManyToOne(() => AccountStockJournal)
  // @JoinColumn({ name: 'account_stock_journal_id' })
  // account_stock_journal: AccountStockJournal;

  /**
   * Stock Valuation Account
   */
  @Column({
    type: 'int'
  })
  account_stock_valuation_id: number;

  // @ManyToOne(() => AccountStockValuation)
  // @JoinColumn({ name: 'account_stock_valuation_id' })
  // account_stock_valuation: AccountStockValuation;

  /**
   * Production WIP Account
   */
  @Column({
    type: 'int'
  })
  account_production_wip_account_id: number;

  // @ManyToOne(() => AccountProductionWipAccount)
  // @JoinColumn({ name: 'account_production_wip_account_id' })
  // account_production_wip_account: AccountProductionWipAccount;

  /**
   * Production WIP Overhead Account
   */
  @Column({
    type: 'int'
  })
  account_production_wip_overhead_account_id: number;

  // @ManyToOne(() => AccountProductionWipOverheadAccount)
  // @JoinColumn({ name: 'account_production_wip_overhead_account_id' })
  // account_production_wip_overhead_account: AccountProductionWipOverheadAccount;

  /**
   * Inventory Period
   */
  @Column({
    type: 'varchar'
  })
  inventory_period: string;

  /**
   * Valuation
   */
  @Column({
    type: 'varchar'
  })
  inventory_valuation: string;

  /**
   * Cost Method
   */
  @Column({
    type: 'varchar'
  })
  cost_method: string;

  /**
   * SMS Template
   */
  @Column({
    type: 'int'
  })
  stock_sms_confirmation_template_id: number;

  // @ManyToOne(() => StockSmsConfirmationTemplate)
  // @JoinColumn({ name: 'stock_sms_confirmation_template_id' })
  // stock_sms_confirmation_template: StockSmsConfirmationTemplate;

  /**
   * Has Received Warning Stock Sms
   */
  @Column({
    type: 'boolean'
  })
  has_received_warning_stock_sms: boolean;

  /**
   * Sales Safety Days
   */
  @Column({
    type: 'varchar'
  })
  security_lead: string;

  /**
   * # emails to send
   */
  @Column({
    type: 'int'
  })
  hr_presence_control_email_amount: number;

  /**
   * Contract Expiry Notice Period
   */
  @Column({
    type: 'int'
  })
  contract_expiration_notice_period: number;

  /**
   * Work Permit Expiry Notice Period
   */
  @Column({
    type: 'int'
  })
  work_permit_expiration_notice_period: number;

  /**
   * Valid IP addresses
   */
  @Column({
    type: 'varchar'
  })
  hr_presence_control_ip_list: string;

  /**
   * Employee Properties
   */
  @Column({
    type: 'jsonb'
  })
  employee_properties_definition: object;

  /**
   * Based on user status in system
   */
  @Column({
    type: 'boolean'
  })
  hr_presence_control_login: boolean;

  /**
   * Based on number of emails sent
   */
  @Column({
    type: 'boolean'
  })
  hr_presence_control_email: boolean;

  /**
   * Based on IP Address
   */
  @Column({
    type: 'boolean'
  })
  hr_presence_control_ip: boolean;

  /**
   * Based on attendances
   */
  @Column({
    type: 'boolean'
  })
  hr_presence_control_attendance: boolean;

  /**
   * Purchase Order Modification
   */
  @Column({
    type: 'varchar'
  })
  po_lock: string;

  /**
   * Levels of Approvals
   */
  @Column({
    type: 'varchar'
  })
  po_double_validation: string;

  /**
   * Double validation amount
   */
  @Column({
    type: 'int'
  })
  po_double_validation_amount: number;

  /**
   * Days to Purchase
   */
  @Column({
    type: 'varchar'
  })
  days_to_purchase: string;

  /**
   * X Account
   */
  @Column({
    type: 'varchar'
  })
  social_twitter: string;

  /**
   * Facebook Account
   */
  @Column({
    type: 'varchar'
  })
  social_facebook: string;

  /**
   * GitHub Account
   */
  @Column({
    type: 'varchar'
  })
  social_github: string;

  /**
   * LinkedIn Account
   */
  @Column({
    type: 'varchar'
  })
  social_linkedin: string;

  /**
   * Youtube Account
   */
  @Column({
    type: 'varchar'
  })
  social_youtube: string;

  /**
   * Instagram Account
   */
  @Column({
    type: 'varchar'
  })
  social_instagram: string;

  /**
   * TikTok Account
   */
  @Column({
    type: 'varchar'
  })
  social_tiktok: string;

  /**
   * Discord Account
   */
  @Column({
    type: 'varchar'
  })
  social_discord: string;

  /**
   * Website
   */
  @Column({
    type: 'int'
  })
  website_id: number;

  // @ManyToOne(() => Website)
  // @JoinColumn({ name: 'website_id' })
  // website: Website;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}