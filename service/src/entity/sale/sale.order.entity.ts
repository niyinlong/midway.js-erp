import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Sales Order
 */
@Entity('sale_order')
export class SaleOrder {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Customer
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * Pending Email Template
   */
  @Column({
    type: 'int'
  })
  pending_email_template_id: number;

  // @ManyToOne(() => PendingEmailTemplate)
  // @JoinColumn({ name: 'pending_email_template_id' })
  // pending_email_template: PendingEmailTemplate;

  /**
   * Invoicing Journal
   */
  @Column({
    type: 'int'
  })
  journal_id: number;

  // @ManyToOne(() => Journal)
  // @JoinColumn({ name: 'journal_id' })
  // journal: Journal;

  /**
   * Invoice Address
   */
  @Column({
    type: 'int'
  })
  partner_invoice_id: number;

  // @ManyToOne(() => PartnerInvoice)
  // @JoinColumn({ name: 'partner_invoice_id' })
  // partner_invoice: PartnerInvoice;

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
   * Payment Terms
   */
  @Column({
    type: 'int'
  })
  payment_term_id: number;

  // @ManyToOne(() => PaymentTerm)
  // @JoinColumn({ name: 'payment_term_id' })
  // payment_term: PaymentTerm;

  /**
   * Payment Method
   */
  @Column({
    type: 'int'
  })
  preferred_payment_method_line_id: number;

  // @ManyToOne(() => PreferredPaymentMethodLine)
  // @JoinColumn({ name: 'preferred_payment_method_line_id' })
  // preferred_payment_method_line: PreferredPaymentMethodLine;

  /**
   * Pricelist
   */
  @Column({
    type: 'int'
  })
  pricelist_id: number;

  // @ManyToOne(() => Pricelist)
  // @JoinColumn({ name: 'pricelist_id' })
  // pricelist: Pricelist;

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
   * Salesperson
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

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
   * Security Token
   */
  @Column({
    type: 'varchar'
  })
  access_token: string;

  /**
   * Order Reference
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Status
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Customer Reference
   */
  @Column({
    type: 'varchar'
  })
  client_order_ref: string;

  /**
   * Source Document
   */
  @Column({
    type: 'varchar'
  })
  origin: string;

  /**
   * Payment Ref.
   */
  @Column({
    type: 'varchar'
  })
  reference: string;

  /**
   * Signed By
   */
  @Column({
    type: 'varchar'
  })
  signed_by: string;

  /**
   * Invoice Status
   */
  @Column({
    type: 'varchar'
  })
  invoice_status: string;

  /**
   * Expiration
   */
  @Column({
    type: 'datetime'
  })
  validity_date: Date;

  /**
   * Terms and conditions
   */
  @Column({
    type: 'varchar'
  })
  note: string;

  /**
   * Currency Rate
   */
  @Column({
    type: 'int'
  })
  currency_rate: number;

  /**
   * Untaxed Amount
   */
  @Column({
    type: 'int'
  })
  amount_untaxed: number;

  /**
   * Taxes
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
   * Locked
   */
  @Column({
    type: 'boolean'
  })
  locked: boolean;

  /**
   * Online signature
   */
  @Column({
    type: 'boolean'
  })
  require_signature: boolean;

  /**
   * Online payment
   */
  @Column({
    type: 'boolean'
  })
  require_payment: boolean;

  /**
   * Creation Date
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

  /**
   * Delivery Date
   */
  @Column({
    type: 'datetime'
  })
  commitment_date: Date;

  /**
   * Order Date
   */
  @Column({
    type: 'datetime'
  })
  date_order: Date;

  /**
   * Signed On
   */
  @Column({
    type: 'datetime'
  })
  signed_on: Date;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

  /**
   * Prepayment percentage
   */
  @Column({
    type: 'varchar'
  })
  prepayment_percent: string;

  @Column({
    type: 'int'
  })
  sale_order_template_id: number;

  // @ManyToOne(() => SaleOrderTemplate)
  // @JoinColumn({ name: 'sale_order_template_id' })
  // sale_order_template: SaleOrderTemplate;

  /**
   * Customizable PDF Form Fields
   */
  @Column({
    type: 'jsonb'
  })
  customizable_pdf_form_fields: object;

  /**
   * Opportunity
   */
  @Column({
    type: 'int'
  })
  opportunity_id: number;

  // @ManyToOne(() => Opportunity)
  // @JoinColumn({ name: 'opportunity_id' })
  // opportunity: Opportunity;

  /**
   * Incoterm
   */
  @Column({
    type: 'int'
  })
  incoterm: number;

  /**
   * Warehouse
   */
  @Column({
    type: 'int'
  })
  warehouse_id: number;

  // @ManyToOne(() => Warehouse)
  // @JoinColumn({ name: 'warehouse_id' })
  // warehouse: Warehouse;

  /**
   * Incoterm Location
   */
  @Column({
    type: 'varchar'
  })
  incoterm_location: string;

  /**
   * Shipping Policy
   */
  @Column({
    type: 'varchar'
  })
  picking_policy: string;

  /**
   * Delivery Status
   */
  @Column({
    type: 'varchar'
  })
  delivery_status: string;

  /**
   * Effective Date
   */
  @Column({
    type: 'datetime'
  })
  effective_date: Date;

  /**
   * Project
   */
  @Column({
    type: 'int'
  })
  project_id: number;

  // @ManyToOne(() => Project)
  // @JoinColumn({ name: 'project_id' })
  // project: Project;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}