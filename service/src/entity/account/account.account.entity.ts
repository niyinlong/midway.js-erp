import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Account
 */
@Entity('account_account')
export class AccountAccount {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Account Currency
   */
  @Column({
    type: 'int'
  })
  currency_id: number;

  // @ManyToOne(() => Currency)
  // @JoinColumn({ name: 'currency_id' })
  // currency: Currency;

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
   * Type
   */
  @Column({
    type: 'varchar'
  })
  account_type: string;

  /**
   * Account Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Description
   */
  @Column({
    type: 'jsonb'
  })
  description: object;

  /**
   * Code Store
   */
  @Column({
    type: 'jsonb'
  })
  code_store: object;

  /**
   * Internal Notes
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
   * Allow Reconciliation
   */
  @Column({
    type: 'boolean'
  })
  reconcile: boolean;

  /**
   * Non Trade
   */
  @Column({
    type: 'boolean'
  })
  non_trade: boolean;

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
   * Variation Account
   */
  @Column({
    type: 'int'
  })
  account_stock_variation_id: number;

  // @ManyToOne(() => AccountStockVariation)
  // @JoinColumn({ name: 'account_stock_variation_id' })
  // account_stock_variation: AccountStockVariation;

  /**
   * Expense Account
   */
  @Column({
    type: 'int'
  })
  account_stock_expense_id: number;

  // @ManyToOne(() => AccountStockExpense)
  // @JoinColumn({ name: 'account_stock_expense_id' })
  // account_stock_expense: AccountStockExpense;

}