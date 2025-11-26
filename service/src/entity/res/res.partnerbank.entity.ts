import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Bank Accounts
 */
@Entity('res_partner_bank')
export class ResPartnerBank {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Account Holder
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * Bank
   */
  @Column({
    type: 'int'
  })
  bank_id: number;

  // @ManyToOne(() => Bank)
  // @JoinColumn({ name: 'bank_id' })
  // bank: Bank;

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
   * Account Number
   */
  @Column({
    type: 'varchar'
  })
  acc_number: string;

  /**
   * Clearing Number
   */
  @Column({
    type: 'varchar'
  })
  clearing_number: string;

  /**
   * Sanitized Account Number
   */
  @Column({
    type: 'varchar'
  })
  sanitized_acc_number: string;

  /**
   * Account Holder Name
   */
  @Column({
    type: 'varchar'
  })
  acc_holder_name: string;

  /**
   * Notes
   */
  @Column({
    type: 'varchar'
  })
  note: string;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Send Money
   */
  @Column({
    type: 'boolean'
  })
  allow_out_payment: boolean;

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
   * Has Iban Warning
   */
  @Column({
    type: 'boolean'
  })
  has_iban_warning: boolean;

  /**
   * Has Money Transfer Warning
   */
  @Column({
    type: 'boolean'
  })
  has_money_transfer_warning: boolean;

}