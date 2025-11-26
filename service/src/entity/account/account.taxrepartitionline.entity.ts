import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Tax Repartition Line
 */
@Entity('account_tax_repartition_line')
export class AccountTaxRepartitionLine {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Tax
   */
  @Column({
    type: 'int'
  })
  tax_id: number;

  // @ManyToOne(() => Tax)
  // @JoinColumn({ name: 'tax_id' })
  // tax: Tax;

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
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Based On
   */
  @Column({
    type: 'varchar'
  })
  repartition_type: string;

  /**
   * Related to
   */
  @Column({
    type: 'varchar'
  })
  document_type: string;

  /**
   * %
   */
  @Column({
    type: 'int'
  })
  factor_percent: number;

  /**
   * Tax Closing Entry
   */
  @Column({
    type: 'boolean'
  })
  use_in_tax_closing: boolean;

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