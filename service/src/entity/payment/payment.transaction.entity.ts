import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Payment Transaction
 */
@Entity('payment_transaction')
export class PaymentTransaction {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Provider
   */
  @Column({
    type: 'int'
  })
  provider_id: number;

  // @ManyToOne(() => Provider)
  // @JoinColumn({ name: 'provider_id' })
  // provider: Provider;

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
   * Payment Method
   */
  @Column({
    type: 'int'
  })
  payment_method_id: number;

  // @ManyToOne(() => PaymentMethod)
  // @JoinColumn({ name: 'payment_method_id' })
  // payment_method: PaymentMethod;

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
   * Payment Token
   */
  @Column({
    type: 'int'
  })
  token_id: number;

  // @ManyToOne(() => Token)
  // @JoinColumn({ name: 'token_id' })
  // token: Token;

  /**
   * Source Transaction
   */
  @Column({
    type: 'int'
  })
  source_transaction_id: number;

  // @ManyToOne(() => SourceTransaction)
  // @JoinColumn({ name: 'source_transaction_id' })
  // source_transaction: SourceTransaction;

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
   * State
   */
  @Column({
    type: 'int'
  })
  partner_state_id: number;

  // @ManyToOne(() => PartnerState)
  // @JoinColumn({ name: 'partner_state_id' })
  // partner_state: PartnerState;

  /**
   * Country
   */
  @Column({
    type: 'int'
  })
  partner_country_id: number;

  // @ManyToOne(() => PartnerCountry)
  // @JoinColumn({ name: 'partner_country_id' })
  // partner_country: PartnerCountry;

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
   * Reference
   */
  @Column({
    type: 'varchar'
  })
  reference: string;

  /**
   * Provider Reference
   */
  @Column({
    type: 'varchar'
  })
  provider_reference: string;

  /**
   * Status
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Operation
   */
  @Column({
    type: 'varchar'
  })
  operation: string;

  /**
   * Landing Route
   */
  @Column({
    type: 'varchar'
  })
  landing_route: string;

  /**
   * Partner Name
   */
  @Column({
    type: 'varchar'
  })
  partner_name: string;

  /**
   * Language
   */
  @Column({
    type: 'varchar'
  })
  partner_lang: string;

  /**
   * Email
   */
  @Column({
    type: 'varchar'
  })
  partner_email: string;

  /**
   * Address
   */
  @Column({
    type: 'varchar'
  })
  partner_address: string;

  /**
   * Zip
   */
  @Column({
    type: 'varchar'
  })
  partner_zip: string;

  /**
   * City
   */
  @Column({
    type: 'varchar'
  })
  partner_city: string;

  /**
   * Phone
   */
  @Column({
    type: 'varchar'
  })
  partner_phone: string;

  /**
   * Message
   */
  @Column({
    type: 'varchar'
  })
  state_message: string;

  /**
   * Amount
   */
  @Column({
    type: 'int'
  })
  amount: number;

  /**
   * Production Environment
   */
  @Column({
    type: 'boolean'
  })
  is_live: boolean;

  /**
   * Is Post-processed
   */
  @Column({
    type: 'boolean'
  })
  is_post_processed: boolean;

  /**
   * Create Token
   */
  @Column({
    type: 'boolean'
  })
  tokenize: boolean;

  /**
   * Last State Change Date
   */
  @Column({
    type: 'datetime'
  })
  last_state_change: Date;

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
   * Payment
   */
  @Column({
    type: 'int'
  })
  payment_id: number;

  // @ManyToOne(() => Payment)
  // @JoinColumn({ name: 'payment_id' })
  // payment: Payment;

  /**
   * Is donation
   */
  @Column({
    type: 'boolean'
  })
  is_donation: boolean;

}