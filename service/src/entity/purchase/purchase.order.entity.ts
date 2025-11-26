import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Purchase Order
 */
@Entity('purchase_order')
export class PurchaseOrder {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Vendor
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * Dropship Address
   */
  @Column({
    type: 'int'
  })
  dest_address_id: number;

  // @ManyToOne(() => DestAddress)
  // @JoinColumn({ name: 'dest_address_id' })
  // dest_address: DestAddress;

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
   * Bill Count
   */
  @Column({
    type: 'int'
  })
  invoice_count: number;

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
   * Incoterm
   */
  @Column({
    type: 'int'
  })
  incoterm_id: number;

  // @ManyToOne(() => Incoterm)
  // @JoinColumn({ name: 'incoterm_id' })
  // incoterm: Incoterm;

  /**
   * Buyer
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

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
   * Days Before Receipt
   */
  @Column({
    type: 'int'
  })
  reminder_date_before_receipt: number;

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
   * Priority
   */
  @Column({
    type: 'varchar'
  })
  priority: string;

  /**
   * Source
   */
  @Column({
    type: 'varchar'
  })
  origin: string;

  /**
   * Vendor Reference
   */
  @Column({
    type: 'varchar'
  })
  partner_ref: string;

  /**
   * Status
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Billing Status
   */
  @Column({
    type: 'varchar'
  })
  invoice_status: string;

  /**
   * Terms and Conditions
   */
  @Column({
    type: 'varchar'
  })
  note: string;

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
   * Total in currency
   */
  @Column({
    type: 'int'
  })
  amount_total_cc: number;

  /**
   * Currency Rate
   */
  @Column({
    type: 'int'
  })
  currency_rate: number;

  /**
   * Locked
   */
  @Column({
    type: 'boolean'
  })
  locked: boolean;

  /**
   * Acknowledged
   */
  @Column({
    type: 'boolean'
  })
  acknowledged: boolean;

  /**
   * Receipt Reminder Email
   */
  @Column({
    type: 'boolean'
  })
  receipt_reminder_email: boolean;

  /**
   * Order Deadline
   */
  @Column({
    type: 'datetime'
  })
  date_order: Date;

  /**
   * Confirmation Date
   */
  @Column({
    type: 'datetime'
  })
  date_approve: Date;

  /**
   * Expected Arrival
   */
  @Column({
    type: 'datetime'
  })
  date_planned: Date;

  /**
   * Date Calendar Start
   */
  @Column({
    type: 'datetime'
  })
  date_calendar_start: Date;

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
   * Project
   */
  @Column({
    type: 'int'
  })
  project_id: number;

  // @ManyToOne(() => Project)
  // @JoinColumn({ name: 'project_id' })
  // project: Project;

  /**
   * Deliver To
   */
  @Column({
    type: 'int'
  })
  picking_type_id: number;

  // @ManyToOne(() => PickingType)
  // @JoinColumn({ name: 'picking_type_id' })
  // picking_type: PickingType;

  /**
   * Incoterm Location
   */
  @Column({
    type: 'varchar'
  })
  incoterm_location: string;

  /**
   * Receipt Status
   */
  @Column({
    type: 'varchar'
  })
  receipt_status: string;

  /**
   * Arrival
   */
  @Column({
    type: 'datetime'
  })
  effective_date: Date;

}