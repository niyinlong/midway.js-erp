import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Bank Statement
 */
@Entity('account_bank_statement')
export class AccountBankStatement {
  @PrimaryGeneratedColumn()
  id: number;

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
  name: string;

  /**
   * External Reference
   */
  @Column({
    type: 'varchar'
  })
  reference: string;

  /**
   * First Line Index
   */
  @Column({
    type: 'varchar'
  })
  first_line_index: string;

  /**
   * Date
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

  /**
   * Starting Balance
   */
  @Column({
    type: 'int'
  })
  balance_start: number;

  /**
   * Computed Balance
   */
  @Column({
    type: 'int'
  })
  balance_end: number;

  /**
   * Ending Balance
   */
  @Column({
    type: 'int'
  })
  balance_end_real: number;

  /**
   * Is Complete
   */
  @Column({
    type: 'boolean'
  })
  is_complete: boolean;

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