import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Payments
 */
@Entity('account_payment')
export class AccountPayment {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Paired Internal Transfer Payment
   */
  @Column({
    type: 'int'
  })
  paired_internal_transfer_payment_id: number;

  // @ManyToOne(() => PairedInternalTransferPayment)
  // @JoinColumn({ name: 'paired_internal_transfer_payment_id' })
  // paired_internal_transfer_payment: PairedInternalTransferPayment;

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
   * Method
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
   * Outstanding Account
   */
  @Column({
    type: 'int'
  })
  outstanding_account_id: number;

  // @ManyToOne(() => OutstandingAccount)
  // @JoinColumn({ name: 'outstanding_account_id' })
  // outstanding_account: OutstandingAccount;

  /**
   * Destination Account
   */
  @Column({
    type: 'int'
  })
  destination_account_id: number;

  // @ManyToOne(() => DestinationAccount)
  // @JoinColumn({ name: 'destination_account_id' })
  // destination_account: DestinationAccount;

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
  name: string;

  /**
   * State
   */
  @Column({
    type: 'varchar'
  })
  state: string;

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
   * Memo
   */
  @Column({
    type: 'varchar'
  })
  memo: string;

  /**
   * Payment Reference
   */
  @Column({
    type: 'varchar'
  })
  payment_reference: string;

  /**
   * Date
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

  /**
   * Amount
   */
  @Column({
    type: 'int'
  })
  amount: number;

  /**
   * Amount Company Currency Signed
   */
  @Column({
    type: 'int'
  })
  amount_company_currency_signed: number;

  /**
   * Is Reconciled
   */
  @Column({
    type: 'boolean'
  })
  is_reconciled: boolean;

  /**
   * Is Matched With a Bank Statement
   */
  @Column({
    type: 'boolean'
  })
  is_matched: boolean;

  /**
   * Is Sent
   */
  @Column({
    type: 'boolean'
  })
  is_sent: boolean;

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
   * Payment Transaction
   */
  @Column({
    type: 'int'
  })
  payment_transaction_id: number;

  // @ManyToOne(() => PaymentTransaction)
  // @JoinColumn({ name: 'payment_transaction_id' })
  // payment_transaction: PaymentTransaction;

  /**
   * Saved Payment Token
   */
  @Column({
    type: 'int'
  })
  payment_token_id: number;

  // @ManyToOne(() => PaymentToken)
  // @JoinColumn({ name: 'payment_token_id' })
  // payment_token: PaymentToken;

  /**
   * Source Payment
   */
  @Column({
    type: 'int'
  })
  source_payment_id: number;

  // @ManyToOne(() => SourcePayment)
  // @JoinColumn({ name: 'source_payment_id' })
  // source_payment: SourcePayment;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}