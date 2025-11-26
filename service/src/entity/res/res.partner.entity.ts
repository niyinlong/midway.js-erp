import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('res_partner')
export class ResPartner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  @Column({
    type: 'datetime'
  })
  create_date: Date;

  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Related Company
   */
  @Column({
    type: 'int'
  })
  parent_id: number;

  // @ManyToOne(() => Parent)
  // @JoinColumn({ name: 'parent_id' })
  // parent: Parent;

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
   * State
   */
  @Column({
    type: 'int'
  })
  state_id: number;

  // @ManyToOne(() => State)
  // @JoinColumn({ name: 'state_id' })
  // state: State;

  /**
   * Country
   */
  @Column({
    type: 'int'
  })
  country_id: number;

  // @ManyToOne(() => Country)
  // @JoinColumn({ name: 'country_id' })
  // country: Country;

  /**
   * Industry
   */
  @Column({
    type: 'int'
  })
  industry_id: number;

  // @ManyToOne(() => Industry)
  // @JoinColumn({ name: 'industry_id' })
  // industry: Industry;

  /**
   * Color Index
   */
  @Column({
    type: 'int'
  })
  color: number;

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
   * Complete Name
   */
  @Column({
    type: 'varchar'
  })
  complete_name: string;

  /**
   * Reference
   */
  @Column({
    type: 'varchar'
  })
  ref: string;

  /**
   * Language
   */
  @Column({
    type: 'varchar'
  })
  lang: string;

  /**
   * Timezone
   */
  @Column({
    type: 'varchar'
  })
  tz: string;

  /**
   * Tax ID
   */
  @Column({
    type: 'varchar'
  })
  vat: string;

  /**
   * Company ID
   */
  @Column({
    type: 'varchar'
  })
  company_registry: string;

  /**
   * Website Link
   */
  @Column({
    type: 'varchar'
  })
  website: string;

  /**
   * Job Position
   */
  @Column({
    type: 'varchar'
  })
  function: string;

  /**
   * Address Type
   */
  @Column({
    type: 'varchar'
  })
  type: string;

  /**
   * Street
   */
  @Column({
    type: 'varchar'
  })
  street: string;

  /**
   * Street2
   */
  @Column({
    type: 'varchar'
  })
  street2: string;

  /**
   * Zip
   */
  @Column({
    type: 'varchar'
  })
  zip: string;

  /**
   * City
   */
  @Column({
    type: 'varchar'
  })
  city: string;

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
   * Company Name Entity
   */
  @Column({
    type: 'varchar'
  })
  commercial_company_name: string;

  /**
   * Company Name
   */
  @Column({
    type: 'varchar'
  })
  company_name: string;

  /**
   * Properties
   */
  @Column({
    type: 'jsonb'
  })
  properties: object;

  /**
   * Barcode
   */
  @Column({
    type: 'jsonb'
  })
  barcode: object;

  /**
   * Notes
   */
  @Column({
    type: 'varchar'
  })
  comment: string;

  /**
   * Geo Latitude
   */
  @Column({
    type: 'int'
  })
  partner_latitude: number;

  /**
   * Geo Longitude
   */
  @Column({
    type: 'int'
  })
  partner_longitude: number;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Employee
   */
  @Column({
    type: 'boolean'
  })
  employee: boolean;

  /**
   * Is a Company
   */
  @Column({
    type: 'boolean'
  })
  is_company: boolean;

  /**
   * Share Partner
   */
  @Column({
    type: 'boolean'
  })
  partner_share: boolean;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

  /**
   * Bounce
   */
  @Column({
    type: 'int'
  })
  message_bounce: number;

  /**
   * Normalized Email
   */
  @Column({
    type: 'varchar'
  })
  email_normalized: string;

  /**
   * Signup Token Type
   */
  @Column({
    type: 'varchar'
  })
  signup_type: string;

  /**
   * Sanitized Number
   */
  @Column({
    type: 'varchar'
  })
  phone_sanitized: string;

  /**
   * Specific Property Product Pricelist
   */
  @Column({
    type: 'jsonb'
  })
  specific_property_product_pricelist: object;

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
   * Supplier Rank
   */
  @Column({
    type: 'int'
  })
  supplier_rank: number;

  /**
   * Customer Rank
   */
  @Column({
    type: 'int'
  })
  customer_rank: number;

  /**
   * Auto-post bills
   */
  @Column({
    type: 'varchar'
  })
  autopost_bills: string;

  /**
   * Credit Limit
   */
  @Column({
    type: 'jsonb'
  })
  credit_limit: object;

  /**
   * Account Payable
   */
  @Column({
    type: 'jsonb'
  })
  property_account_payable_id: object;

  // @ManyToOne(() => PropertyAccountPayable)
  // @JoinColumn({ name: 'property_account_payable_id' })
  // property_account_payable: PropertyAccountPayable;

  /**
   * Account Receivable
   */
  @Column({
    type: 'jsonb'
  })
  property_account_receivable_id: object;

  // @ManyToOne(() => PropertyAccountReceivable)
  // @JoinColumn({ name: 'property_account_receivable_id' })
  // property_account_receivable: PropertyAccountReceivable;

  /**
   * Fiscal Position
   */
  @Column({
    type: 'jsonb'
  })
  property_account_position_id: object;

  // @ManyToOne(() => PropertyAccountPosition)
  // @JoinColumn({ name: 'property_account_position_id' })
  // property_account_position: PropertyAccountPosition;

  /**
   * Customer Payment Terms
   */
  @Column({
    type: 'jsonb'
  })
  property_payment_term_id: object;

  // @ManyToOne(() => PropertyPaymentTerm)
  // @JoinColumn({ name: 'property_payment_term_id' })
  // property_payment_term: PropertyPaymentTerm;

  /**
   * Vendor Payment Terms
   */
  @Column({
    type: 'jsonb'
  })
  property_supplier_payment_term_id: object;

  // @ManyToOne(() => PropertySupplierPaymentTerm)
  // @JoinColumn({ name: 'property_supplier_payment_term_id' })
  // property_supplier_payment_term: PropertySupplierPaymentTerm;

  /**
   * Degree of trust you have in this debtor
   */
  @Column({
    type: 'jsonb'
  })
  trust: object;

  /**
   * Ignore Abnormal Invoice Date
   */
  @Column({
    type: 'jsonb'
  })
  ignore_abnormal_invoice_date: object;

  /**
   * Ignore Abnormal Invoice Amount
   */
  @Column({
    type: 'jsonb'
  })
  ignore_abnormal_invoice_amount: object;

  /**
   * Invoice sending
   */
  @Column({
    type: 'jsonb'
  })
  invoice_sending_method: object;

  /**
   * Invoice Edi Format Store
   */
  @Column({
    type: 'jsonb'
  })
  invoice_edi_format_store: object;

  /**
   * Property Outbound Payment Method Line
   */
  @Column({
    type: 'jsonb'
  })
  property_outbound_payment_method_line_id: object;

  // @ManyToOne(() => PropertyOutboundPaymentMethodLine)
  // @JoinColumn({ name: 'property_outbound_payment_method_line_id' })
  // property_outbound_payment_method_line: PropertyOutboundPaymentMethodLine;

  /**
   * Property Inbound Payment Method Line
   */
  @Column({
    type: 'jsonb'
  })
  property_inbound_payment_method_line_id: object;

  // @ManyToOne(() => PropertyInboundPaymentMethodLine)
  // @JoinColumn({ name: 'property_inbound_payment_method_line_id' })
  // property_inbound_payment_method_line: PropertyInboundPaymentMethodLine;

  /**
   * Peppol Endpoint
   */
  @Column({
    type: 'varchar'
  })
  peppol_endpoint: string;

  /**
   * Peppol e-address (EAS)
   */
  @Column({
    type: 'varchar'
  })
  peppol_eas: string;

  /**
   * Message for Sales Order
   */
  @Column({
    type: 'varchar'
  })
  sale_warn_msg: string;

  /**
   * Last notification marked as read from base Calendar
   */
  @Column({
    type: 'datetime'
  })
  calendar_last_notif_ack: Date;

  /**
   * Customer Location
   */
  @Column({
    type: 'jsonb'
  })
  property_stock_customer: object;

  /**
   * Vendor Location
   */
  @Column({
    type: 'jsonb'
  })
  property_stock_supplier: object;

  /**
   * Message for Stock Picking
   */
  @Column({
    type: 'varchar'
  })
  picking_warn_msg: string;

  /**
   * Buyer
   */
  @Column({
    type: 'int'
  })
  buyer_id: number;

  // @ManyToOne(() => Buyer)
  // @JoinColumn({ name: 'buyer_id' })
  // buyer: Buyer;

  /**
   * Supplier Currency
   */
  @Column({
    type: 'jsonb'
  })
  property_purchase_currency_id: object;

  // @ManyToOne(() => PropertyPurchaseCurrency)
  // @JoinColumn({ name: 'property_purchase_currency_id' })
  // property_purchase_currency: PropertyPurchaseCurrency;

  /**
   * Receipt Reminder
   */
  @Column({
    type: 'jsonb'
  })
  receipt_reminder_email: object;

  /**
   * Days Before Receipt
   */
  @Column({
    type: 'jsonb'
  })
  reminder_date_before_receipt: object;

  /**
   * Message for Purchase Order
   */
  @Column({
    type: 'varchar'
  })
  purchase_warn_msg: string;

  /**
   * Suggest Days
   */
  @Column({
    type: 'int'
  })
  suggest_days: number;

  /**
   * Suggest Percent
   */
  @Column({
    type: 'int'
  })
  suggest_percent: number;

  /**
   * Suggest Based On
   */
  @Column({
    type: 'varchar'
  })
  suggest_based_on: string;

  /**
   * Group RFQ
   */
  @Column({
    type: 'varchar'
  })
  group_rfq: string;

  /**
   * Week Day
   */
  @Column({
    type: 'varchar'
  })
  group_on: string;

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

  /**
   * Is Published
   */
  @Column({
    type: 'boolean'
  })
  is_published: boolean;

  /**
   * Website opengraph image
   */
  @Column({
    type: 'varchar'
  })
  website_meta_og_img: string;

  /**
   * Website meta title
   */
  @Column({
    type: 'jsonb'
  })
  website_meta_title: object;

  /**
   * Website meta description
   */
  @Column({
    type: 'jsonb'
  })
  website_meta_description: object;

  /**
   * Website meta keywords
   */
  @Column({
    type: 'jsonb'
  })
  website_meta_keywords: object;

  /**
   * Seo name
   */
  @Column({
    type: 'jsonb'
  })
  seo_name: object;

  /**
   * Website Partner Full Description
   */
  @Column({
    type: 'jsonb'
  })
  website_description: object;

  /**
   * Website Partner Short Description
   */
  @Column({
    type: 'jsonb'
  })
  website_short_description: object;

  /**
   * SEO optimized
   */
  @Column({
    type: 'boolean'
  })
  is_seo_optimized: boolean;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}