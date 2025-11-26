import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Bank Statement Line
 */
@Entity('account_bank_statement_line')
export class AccountBankStatementLine {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Statement
   */
  @Column({
    type: 'int'
  })
  statement_id: number;

  // @ManyToOne(() => Statement)
  // @JoinColumn({ name: 'statement_id' })
  // statement: Statement;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Partner
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * Journal Currency
   */
  @Column({
    type: 'int'
  })
  currency_id: number;

  // @ManyToOne(() => Currency)
  // @JoinColumn({ name: 'currency_id' })
  // currency: Currency;

  /**
   * Foreign Currency
   */
  @Column({
    type: 'int'
  })
  foreign_currency_id: number;

  // @ManyToOne(() => ForeignCurrency)
  // @JoinColumn({ name: 'foreign_currency_id' })
  // foreign_currency: ForeignCurrency;

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
   * Bank Account Number
   */
  @Column({
    type: 'varchar'
  })
  account_number: string;

  /**
   * Partner Name
   */
  @Column({
    type: 'varchar'
  })
  partner_name: string;

  /**
   * Transaction Type
   */
  @Column({
    type: 'varchar'
  })
  transaction_type: string;

  /**
   * Label
   */
  @Column({
    type: 'varchar'
  })
  payment_ref: string;

  /**
   * Internal Reference
   */
  @Column({
    type: 'varchar'
  })
  internal_index: string;

  /**
   * Transaction Details
   */
  @Column({
    type: 'jsonb'
  })
  transaction_details: object;

  /**
   * Amount
   */
  @Column({
    type: 'int'
  })
  amount: number;

  /**
   * Amount in Currency
   */
  @Column({
    type: 'int'
  })
  amount_currency: number;

  /**
   * Is Reconciled
   */
  @Column({
    type: 'boolean'
  })
  is_reconciled: boolean;

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
   * Residual Amount
   */
  @Column({
    type: 'varchar'
  })
  amount_residual: string;

}