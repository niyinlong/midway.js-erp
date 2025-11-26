import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Tax Group
 */
@Entity('account_tax_group')
export class AccountTaxGroup {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Tax Payable Account
   */
  @Column({
    type: 'int'
  })
  tax_payable_account_id: number;

  // @ManyToOne(() => TaxPayableAccount)
  // @JoinColumn({ name: 'tax_payable_account_id' })
  // tax_payable_account: TaxPayableAccount;

  /**
   * Tax Receivable Account
   */
  @Column({
    type: 'int'
  })
  tax_receivable_account_id: number;

  // @ManyToOne(() => TaxReceivableAccount)
  // @JoinColumn({ name: 'tax_receivable_account_id' })
  // tax_receivable_account: TaxReceivableAccount;

  /**
   * Tax Advance Account
   */
  @Column({
    type: 'int'
  })
  advance_tax_payment_account_id: number;

  // @ManyToOne(() => AdvanceTaxPaymentAccount)
  // @JoinColumn({ name: 'advance_tax_payment_account_id' })
  // advance_tax_payment_account: AdvanceTaxPaymentAccount;

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
   * PoS receipt label
   */
  @Column({
    type: 'varchar'
  })
  pos_receipt_label: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Preceding Subtotal
   */
  @Column({
    type: 'jsonb'
  })
  preceding_subtotal: object;

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

}