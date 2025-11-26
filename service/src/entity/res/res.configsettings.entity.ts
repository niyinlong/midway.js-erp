import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Config Settings
 */
@Entity('res_config_settings')
export class ResConfigSettings {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Web App Name
   */
  @Column({
    type: 'varchar'
  })
  web_app_name: string;

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
   * Allow users to import data from CSV/XLS/XLSX/ODS files
   */
  @Column({
    type: 'boolean'
  })
  module_base_import: boolean;

  /**
   * Allow the users to synchronize their calendar  with Google Calendar
   */
  @Column({
    type: 'boolean'
  })
  module_google_calendar: boolean;

  /**
   * Allow the users to synchronize their calendar with Outlook Calendar
   */
  @Column({
    type: 'boolean'
  })
  module_microsoft_calendar: boolean;

  /**
   * Allow integration with the mail plugins
   */
  @Column({
    type: 'boolean'
  })
  module_mail_plugin: boolean;

  /**
   * Use external authentication providers (OAuth)
   */
  @Column({
    type: 'boolean'
  })
  module_auth_oauth: boolean;

  /**
   * LDAP Authentication
   */
  @Column({
    type: 'boolean'
  })
  module_auth_ldap: boolean;

  /**
   * Manage Inter Company
   */
  @Column({
    type: 'boolean'
  })
  module_account_inter_company_rules: boolean;

  /**
   * Phone
   */
  @Column({
    type: 'boolean'
  })
  module_voip: boolean;

  /**
   * Unsplash Image Library
   */
  @Column({
    type: 'boolean'
  })
  module_web_unsplash: boolean;

  /**
   * SMS
   */
  @Column({
    type: 'boolean'
  })
  module_sms: boolean;

  /**
   * Partner Autocomplete
   */
  @Column({
    type: 'boolean'
  })
  module_partner_autocomplete: boolean;

  /**
   * GeoLocalize
   */
  @Column({
    type: 'boolean'
  })
  module_base_geolocalize: boolean;

  /**
   * reCAPTCHA
   */
  @Column({
    type: 'boolean'
  })
  module_google_recaptcha: boolean;

  /**
   * Cloudflare Turnstile
   */
  @Column({
    type: 'boolean'
  })
  module_website_cf_turnstile: boolean;

  /**
   * Google Address Autocomplete
   */
  @Column({
    type: 'boolean'
  })
  module_google_address_autocomplete: boolean;

  /**
   * Multi-Currencies
   */
  @Column({
    type: 'boolean'
  })
  group_multi_currency: boolean;

  /**
   * Show Effect
   */
  @Column({
    type: 'boolean'
  })
  show_effect: boolean;

  /**
   * Profiling enabled until
   */
  @Column({
    type: 'datetime'
  })
  profiling_enabled_until: Date;

  /**
   * Access Key
   */
  @Column({
    type: 'varchar'
  })
  unsplash_access_key: string;

  /**
   * Application ID
   */
  @Column({
    type: 'varchar'
  })
  unsplash_app_id: string;

  // @ManyToOne(() => UnsplashApp)
  // @JoinColumn({ name: 'unsplash_app_id' })
  // unsplash_app: UnsplashApp;

  /**
   * Account SID
   */
  @Column({
    type: 'varchar'
  })
  twilio_account_sid: string;

  /**
   * Account Auth Token
   */
  @Column({
    type: 'varchar'
  })
  twilio_account_token: string;

  /**
   * SFU Server URL
   */
  @Column({
    type: 'varchar'
  })
  sfu_server_url: string;

  /**
   * SFU Server key
   */
  @Column({
    type: 'varchar'
  })
  sfu_server_key: string;

  /**
   * Tenor API key
   */
  @Column({
    type: 'varchar'
  })
  tenor_api_key: string;

  /**
   * Message Translation API Key
   */
  @Column({
    type: 'varchar'
  })
  google_translate_api_key: string;

  /**
   * Use Custom Email Servers
   */
  @Column({
    type: 'boolean'
  })
  external_email_server_default: boolean;

  /**
   * Support Gmail Authentication
   */
  @Column({
    type: 'boolean'
  })
  module_google_gmail: boolean;

  /**
   * Support Outlook Authentication
   */
  @Column({
    type: 'boolean'
  })
  module_microsoft_outlook: boolean;

  /**
   * Restrict Template Rendering
   */
  @Column({
    type: 'boolean'
  })
  restrict_template_rendering: boolean;

  /**
   * Use Twilio ICE servers
   */
  @Column({
    type: 'boolean'
  })
  use_twilio_rtc_servers: boolean;

  /**
   * Use SFU server
   */
  @Column({
    type: 'boolean'
  })
  use_sfu_server: boolean;

  /**
   * Analytic Accounting
   */
  @Column({
    type: 'boolean'
  })
  group_analytic_accounting: boolean;

  /**
   * Template user for new users created through signup
   */
  @Column({
    type: 'int'
  })
  auth_signup_template_user_id: number;

  // @ManyToOne(() => AuthSignupTemplateUser)
  // @JoinColumn({ name: 'auth_signup_template_user_id' })
  // auth_signup_template_user: AuthSignupTemplateUser;

  /**
   * Customer Account
   */
  @Column({
    type: 'varchar'
  })
  auth_signup_uninvited: string;

  /**
   * Enable password reset from Login page
   */
  @Column({
    type: 'boolean'
  })
  auth_signup_reset_password: boolean;

  /**
   * Two-factor authentication enforcing policy
   */
  @Column({
    type: 'varchar'
  })
  auth_totp_policy: string;

  /**
   * Enforce two-factor authentication
   */
  @Column({
    type: 'boolean'
  })
  auth_totp_enforce: boolean;

  /**
   * Gmail Client Id
   */
  @Column({
    type: 'varchar'
  })
  google_gmail_client_identifier: string;

  // @ManyToOne(() => GoogleGmailCliententifier)
  // @JoinColumn({ name: 'google_gmail_client_identifier' })
  // google_gmail_cliententifier: GoogleGmailCliententifier;

  /**
   * Gmail Client Secret
   */
  @Column({
    type: 'varchar'
  })
  google_gmail_client_secret: string;

  /**
   * Outlook Client Id
   */
  @Column({
    type: 'varchar'
  })
  microsoft_outlook_client_identifier: string;

  // @ManyToOne(() => MicrosoftOutlookCliententifier)
  // @JoinColumn({ name: 'microsoft_outlook_client_identifier' })
  // microsoft_outlook_cliententifier: MicrosoftOutlookCliententifier;

  /**
   * Outlook Client Secret
   */
  @Column({
    type: 'varchar'
  })
  microsoft_outlook_client_secret: string;

  /**
   * Weight unit of measure
   */
  @Column({
    type: 'varchar'
  })
  product_weight_in_lbs: string;

  /**
   * Volume unit of measure
   */
  @Column({
    type: 'varchar'
  })
  product_volume_volume_in_cubic_feet: string;

  /**
   * Units of Measure & Packagings
   */
  @Column({
    type: 'boolean'
  })
  group_uom: boolean;

  /**
   * Variants
   */
  @Column({
    type: 'boolean'
  })
  group_product_variant: boolean;

  /**
   * Promotions, Coupons, Gift Card & Loyalty Program
   */
  @Column({
    type: 'boolean'
  })
  module_loyalty: boolean;

  /**
   * Pricelists
   */
  @Column({
    type: 'boolean'
  })
  group_product_pricelist: boolean;

  /**
   * Digest Email
   */
  @Column({
    type: 'int'
  })
  digest_id: number;

  // @ManyToOne(() => Digest)
  // @JoinColumn({ name: 'digest_id' })
  // digest: Digest;

  /**
   * Digest Emails
   */
  @Column({
    type: 'boolean'
  })
  digest_emails: boolean;

  /**
   * Chart Template
   */
  @Column({
    type: 'varchar'
  })
  chart_template: string;

  /**
   * Accounting
   */
  @Column({
    type: 'boolean'
  })
  module_account_accountant: boolean;

  /**
   * Cash Rounding
   */
  @Column({
    type: 'boolean'
  })
  group_cash_rounding: boolean;

  /**
   * Sale Receipt
   */
  @Column({
    type: 'boolean'
  })
  show_sale_receipts: boolean;

  /**
   * Budget Management
   */
  @Column({
    type: 'boolean'
  })
  module_account_budget: boolean;

  /**
   * Invoice Online Payment
   */
  @Column({
    type: 'boolean'
  })
  module_account_payment: boolean;

  /**
   * Dynamic Reports
   */
  @Column({
    type: 'boolean'
  })
  module_account_reports: boolean;

  /**
   * Allow check printing and deposits
   */
  @Column({
    type: 'boolean'
  })
  module_account_check_printing: boolean;

  /**
   * Use batch payments
   */
  @Column({
    type: 'boolean'
  })
  module_account_batch_payment: boolean;

  /**
   * SEPA Credit Transfer / ISO20022
   */
  @Column({
    type: 'boolean'
  })
  module_account_iso20022: boolean;

  /**
   * Use SEPA Direct Debit
   */
  @Column({
    type: 'boolean'
  })
  module_account_sepa_direct_debit: boolean;

  /**
   * Import .qif files
   */
  @Column({
    type: 'boolean'
  })
  module_account_bank_statement_import_qif: boolean;

  /**
   * Automatic Currency Rates
   */
  @Column({
    type: 'boolean'
  })
  module_currency_rate_live: boolean;

  /**
   * Intrastat
   */
  @Column({
    type: 'boolean'
  })
  module_account_intrastat: boolean;

  /**
   * Allow Product Margin
   */
  @Column({
    type: 'boolean'
  })
  module_product_margin: boolean;

  /**
   * Document Digitization
   */
  @Column({
    type: 'boolean'
  })
  module_account_extract: boolean;

  /**
   * Invoice Digitization
   */
  @Column({
    type: 'boolean'
  })
  module_account_invoice_extract: boolean;

  /**
   * Bank Statement Digitization
   */
  @Column({
    type: 'boolean'
  })
  module_account_bank_statement_extract: boolean;

  /**
   * Snailmail
   */
  @Column({
    type: 'boolean'
  })
  module_snailmail_account: boolean;

  /**
   * PEPPOL Invoicing
   */
  @Column({
    type: 'boolean'
  })
  module_account_peppol: boolean;

  /**
   * Default Terms & Conditions
   */
  @Column({
    type: 'boolean'
  })
  use_invoice_terms: boolean;

  /**
   * Customer Addresses
   */
  @Column({
    type: 'boolean'
  })
  group_sale_delivery_address: boolean;

  /**
   * Pay Invoices Online
   */
  @Column({
    type: 'boolean'
  })
  pay_invoices_online: boolean;

  /**
   * Email Template
   */
  @Column({
    type: 'int'
  })
  invoice_mail_template_id: number;

  // @ManyToOne(() => InvoiceMailTemplate)
  // @JoinColumn({ name: 'invoice_mail_template_id' })
  // invoice_mail_template: InvoiceMailTemplate;

  /**
   * Invoicing Policy
   */
  @Column({
    type: 'varchar'
  })
  default_invoice_policy: string;

  /**
   * Lock Confirmed Sales
   */
  @Column({
    type: 'boolean'
  })
  group_auto_done_setting: boolean;

  /**
   * Discounts
   */
  @Column({
    type: 'boolean'
  })
  group_discount_per_so_line: boolean;

  /**
   * Pro-Forma Invoice
   */
  @Column({
    type: 'boolean'
  })
  group_proforma_sales: boolean;

  /**
   * Sale Order Warnings
   */
  @Column({
    type: 'boolean'
  })
  group_warning_sale: boolean;

  /**
   * Automatic Invoice
   */
  @Column({
    type: 'boolean'
  })
  automatic_invoice: boolean;

  /**
   * Delivery Methods
   */
  @Column({
    type: 'boolean'
  })
  module_delivery: boolean;

  /**
   * bpost Connector
   */
  @Column({
    type: 'boolean'
  })
  module_delivery_bpost: boolean;

  /**
   * DHL Express Connector
   */
  @Column({
    type: 'boolean'
  })
  module_delivery_dhl: boolean;

  /**
   * Easypost Connector
   */
  @Column({
    type: 'boolean'
  })
  module_delivery_easypost: boolean;

  /**
   * Envia.com Connector
   */
  @Column({
    type: 'boolean'
  })
  module_delivery_envia: boolean;

  /**
   * FedEx Connector
   */
  @Column({
    type: 'boolean'
  })
  module_delivery_fedex_rest: boolean;

  /**
   * Sendcloud Connector
   */
  @Column({
    type: 'boolean'
  })
  module_delivery_sendcloud: boolean;

  /**
   * Shiprocket Connector
   */
  @Column({
    type: 'boolean'
  })
  module_delivery_shiprocket: boolean;

  /**
   * Starshipit Connector
   */
  @Column({
    type: 'boolean'
  })
  module_delivery_starshipit: boolean;

  /**
   * UPS Connector
   */
  @Column({
    type: 'boolean'
  })
  module_delivery_ups_rest: boolean;

  /**
   * USPS Connector
   */
  @Column({
    type: 'boolean'
  })
  module_delivery_usps_rest: boolean;

  /**
   * Specific Email
   */
  @Column({
    type: 'boolean'
  })
  module_product_email_template: boolean;

  /**
   * Amazon Sync
   */
  @Column({
    type: 'boolean'
  })
  module_sale_amazon: boolean;

  /**
   * Commissions
   */
  @Column({
    type: 'boolean'
  })
  module_sale_commission: boolean;

  /**
   * Gelato
   */
  @Column({
    type: 'boolean'
  })
  module_sale_gelato: boolean;

  /**
   * Coupons & Loyalty
   */
  @Column({
    type: 'boolean'
  })
  module_sale_loyalty: boolean;

  /**
   * Margins
   */
  @Column({
    type: 'boolean'
  })
  module_sale_margin: boolean;

  /**
   * PDF Quote builder
   */
  @Column({
    type: 'boolean'
  })
  module_sale_pdf_quote_builder: boolean;

  /**
   * Sales Grid Entry
   */
  @Column({
    type: 'boolean'
  })
  module_sale_product_matrix: boolean;

  /**
   * Shopee Sync
   */
  @Column({
    type: 'boolean'
  })
  module_sale_shopee: boolean;

  /**
   * Quotation Templates
   */
  @Column({
    type: 'boolean'
  })
  group_sale_order_template: boolean;

  /**
   * Repeat every
   */
  @Column({
    type: 'int'
  })
  crm_auto_assignment_interval_number: number;

  /**
   * Auto Assignment Action
   */
  @Column({
    type: 'varchar'
  })
  crm_auto_assignment_action: string;

  /**
   * Auto Assignment Interval Unit
   */
  @Column({
    type: 'varchar'
  })
  crm_auto_assignment_interval_type: string;

  /**
   * Enrich lead automatically
   */
  @Column({
    type: 'varchar'
  })
  lead_enrich_auto: string;

  /**
   * Lead Scoring Starting Date in String
   */
  @Column({
    type: 'varchar'
  })
  predictive_lead_scoring_start_date_str: string;

  /**
   * Lead Scoring Frequency Fields in String
   */
  @Column({
    type: 'varchar'
  })
  predictive_lead_scoring_fields_str: string;

  /**
   * Leads
   */
  @Column({
    type: 'boolean'
  })
  group_use_lead: boolean;

  /**
   * Recurring Revenues
   */
  @Column({
    type: 'boolean'
  })
  group_use_recurring_revenues: boolean;

  /**
   * Multi Teams
   */
  @Column({
    type: 'boolean'
  })
  is_membership_multi: boolean;

  /**
   * Membership / Partnership
   */
  @Column({
    type: 'boolean'
  })
  module_partnership: boolean;

  /**
   * Rule-Based Assignment
   */
  @Column({
    type: 'boolean'
  })
  crm_use_auto_assignment: boolean;

  /**
   * Generate new leads based on their country, industries, size, etc.
   */
  @Column({
    type: 'boolean'
  })
  module_crm_iap_mine: boolean;

  /**
   * Enrich your leads automatically with company data based on their email address.
   */
  @Column({
    type: 'boolean'
  })
  module_crm_iap_enrich: boolean;

  /**
   * Create Leads/Opportunities from your website''s traffic
   */
  @Column({
    type: 'boolean'
  })
  module_website_crm_iap_reveal: boolean;

  /**
   * Create a lead mining request directly from the opportunity pipeline.
   */
  @Column({
    type: 'boolean'
  })
  lead_mining_in_pipeline: boolean;

  /**
   * Auto Assignment Next Execution Date
   */
  @Column({
    type: 'datetime'
  })
  crm_auto_assignment_run_datetime: Date;

  /**
   * Separator
   */
  @Column({
    type: 'varchar'
  })
  barcode_separator: string;

  /**
   * Expiration Dates
   */
  @Column({
    type: 'boolean'
  })
  module_product_expiry: boolean;

  /**
   * Lots & Serial Numbers
   */
  @Column({
    type: 'boolean'
  })
  group_stock_production_lot: boolean;

  /**
   * Print GS1 Barcodes for Lots & Serial Numbers
   */
  @Column({
    type: 'boolean'
  })
  group_stock_lot_print_gs1: boolean;

  /**
   * Display Lots & Serial Numbers on Delivery Slips
   */
  @Column({
    type: 'boolean'
  })
  group_lot_on_delivery_slip: boolean;

  /**
   * Packages
   */
  @Column({
    type: 'boolean'
  })
  group_stock_tracking_lot: boolean;

  /**
   * Consignment
   */
  @Column({
    type: 'boolean'
  })
  group_stock_tracking_owner: boolean;

  /**
   * Multi-Step Routes
   */
  @Column({
    type: 'boolean'
  })
  group_stock_adv_location: boolean;

  /**
   * Warnings for Stock
   */
  @Column({
    type: 'boolean'
  })
  group_warning_stock: boolean;

  /**
   * Signature
   */
  @Column({
    type: 'boolean'
  })
  group_stock_sign_delivery: boolean;

  /**
   * Batch, Wave & Cluster Transfers
   */
  @Column({
    type: 'boolean'
  })
  module_stock_picking_batch: boolean;

  /**
   * Barcode Scanner
   */
  @Column({
    type: 'boolean'
  })
  module_stock_barcode: boolean;

  /**
   * Stock Barcode Database
   */
  @Column({
    type: 'boolean'
  })
  module_stock_barcode_barcodelookup: boolean;

  /**
   * SMS Confirmation
   */
  @Column({
    type: 'boolean'
  })
  module_stock_sms: boolean;

  /**
   * Quality
   */
  @Column({
    type: 'boolean'
  })
  module_quality_control: boolean;

  /**
   * Quality Worksheet
   */
  @Column({
    type: 'boolean'
  })
  module_quality_control_worksheet: boolean;

  /**
   * Storage Locations
   */
  @Column({
    type: 'boolean'
  })
  group_stock_multi_locations: boolean;

  /**
   * Reception Report
   */
  @Column({
    type: 'boolean'
  })
  group_stock_reception_report: boolean;

  /**
   * Dropshipping
   */
  @Column({
    type: 'boolean'
  })
  module_stock_dropshipping: boolean;

  /**
   * Dispatch Management System
   */
  @Column({
    type: 'boolean'
  })
  module_stock_fleet: boolean;

  /**
   * Landed Costs
   */
  @Column({
    type: 'boolean'
  })
  module_stock_landed_costs: boolean;

  /**
   * Display Lots & Serial Numbers on Invoices
   */
  @Column({
    type: 'boolean'
  })
  group_lot_on_invoice: boolean;

  /**
   * Picking Policy
   */
  @Column({
    type: 'varchar'
  })
  default_picking_policy: string;

  /**
   * Security Lead Time for Sales
   */
  @Column({
    type: 'boolean'
  })
  use_security_lead: boolean;

  /**
   * Task Logs
   */
  @Column({
    type: 'boolean'
  })
  module_hr_timesheet: boolean;

  /**
   * Project Stages
   */
  @Column({
    type: 'boolean'
  })
  group_project_stages: boolean;

  /**
   * Advanced Presence Control
   */
  @Column({
    type: 'boolean'
  })
  module_hr_presence: boolean;

  /**
   * Skills Management
   */
  @Column({
    type: 'boolean'
  })
  module_hr_skills: boolean;

  /**
   * By-Products
   */
  @Column({
    type: 'boolean'
  })
  group_mrp_byproducts: boolean;

  /**
   * Master Production Schedule
   */
  @Column({
    type: 'boolean'
  })
  module_mrp_mps: boolean;

  /**
   * Product Lifecycle Management (PLM)
   */
  @Column({
    type: 'boolean'
  })
  module_mrp_plm: boolean;

  /**
   * Subcontracting
   */
  @Column({
    type: 'boolean'
  })
  module_mrp_subcontracting: boolean;

  /**
   * MRP Work Orders
   */
  @Column({
    type: 'boolean'
  })
  group_mrp_routings: boolean;

  /**
   * Unlock Manufacturing Orders
   */
  @Column({
    type: 'boolean'
  })
  group_unlocked_by_default: boolean;

  /**
   * Allocation Report for Manufacturing Orders
   */
  @Column({
    type: 'boolean'
  })
  group_mrp_reception_report: boolean;

  /**
   * Work Order Dependencies
   */
  @Column({
    type: 'boolean'
  })
  group_mrp_workorder_dependencies: boolean;

  /**
   * Lock Confirmed Orders
   */
  @Column({
    type: 'boolean'
  })
  lock_confirmed_po: boolean;

  /**
   * Purchase Order Approval
   */
  @Column({
    type: 'boolean'
  })
  po_order_approval: boolean;

  /**
   * Purchase Warnings
   */
  @Column({
    type: 'boolean'
  })
  group_warning_purchase: boolean;

  /**
   * 3-way matching: purchases, receptions and bills
   */
  @Column({
    type: 'boolean'
  })
  module_account_3way_match: boolean;

  /**
   * Purchase Agreements
   */
  @Column({
    type: 'boolean'
  })
  module_purchase_requisition: boolean;

  /**
   * Purchase Grid Entry
   */
  @Column({
    type: 'boolean'
  })
  module_purchase_product_matrix: boolean;

  /**
   * Receipt Reminder
   */
  @Column({
    type: 'boolean'
  })
  group_send_reminder: boolean;

  /**
   * Is the Sale Module Installed
   */
  @Column({
    type: 'boolean'
  })
  is_installed_sale: boolean;

  /**
   * Site Key
   */
  @Column({
    type: 'varchar'
  })
  recaptcha_public_key: string;

  /**
   * Secret Key
   */
  @Column({
    type: 'varchar'
  })
  recaptcha_private_key: string;

  /**
   * Enable reCAPTCHA
   */
  @Column({
    type: 'boolean'
  })
  enable_recaptcha: boolean;

  /**
   * Minimum score
   */
  @Column({
    type: 'varchar'
  })
  recaptcha_min_score: string;

  /**
   * website
   */
  @Column({
    type: 'int'
  })
  website_id: number;

  // @ManyToOne(() => Website)
  // @JoinColumn({ name: 'website_id' })
  // website: Website;

  /**
   * Multi-website
   */
  @Column({
    type: 'boolean'
  })
  group_multi_website: boolean;

  /**
   * Module Website Livechat
   */
  @Column({
    type: 'boolean'
  })
  module_website_livechat: boolean;

  /**
   * Sell on eCommerce
   */
  @Column({
    type: 'boolean'
  })
  module_website_sale_slides: boolean;

  /**
   * Forum
   */
  @Column({
    type: 'boolean'
  })
  module_website_slides_forum: boolean;

  /**
   * Certifications
   */
  @Column({
    type: 'boolean'
  })
  module_website_slides_survey: boolean;

  /**
   * Mailing
   */
  @Column({
    type: 'boolean'
  })
  module_mass_mailing_slides: boolean;

}