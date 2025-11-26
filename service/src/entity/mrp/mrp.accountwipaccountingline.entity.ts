import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Account move line to be created when posting WIP account move
 */
@Entity('mrp_account_wip_accounting_line')
export class MrpAccountWipAccountingLine {
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
   * WIP accounting wizard
   */
  @Column({
    type: 'int'
  })
  wip_accounting_id: number;

  // @ManyToOne(() => WipAccounting)
  // @JoinColumn({ name: 'wip_accounting_id' })
  // wip_accounting: WipAccounting;

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
   * Label
   */
  @Column({
    type: 'varchar'
  })
  label: string;

  /**
   * Debit
   */
  @Column({
    type: 'int'
  })
  debit: number;

  /**
   * Credit
   */
  @Column({
    type: 'int'
  })
  credit: number;

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

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}