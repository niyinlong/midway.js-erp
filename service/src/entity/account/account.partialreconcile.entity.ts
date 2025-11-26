import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Partial Reconcile
 */
@Entity('account_partial_reconcile')
export class AccountPartialReconcile {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Debit Move
   */
  @Column({
    type: 'int'
  })
  debit_move_id: number;

  // @ManyToOne(() => DebitMove)
  // @JoinColumn({ name: 'debit_move_id' })
  // debit_move: DebitMove;

  /**
   * Credit Move
   */
  @Column({
    type: 'int'
  })
  credit_move_id: number;

  // @ManyToOne(() => CreditMove)
  // @JoinColumn({ name: 'credit_move_id' })
  // credit_move: CreditMove;

  /**
   * Full Reconcile
   */
  @Column({
    type: 'int'
  })
  full_reconcile_id: number;

  // @ManyToOne(() => FullReconcile)
  // @JoinColumn({ name: 'full_reconcile_id' })
  // full_reconcile: FullReconcile;

  /**
   * Exchange Move
   */
  @Column({
    type: 'int'
  })
  exchange_move_id: number;

  // @ManyToOne(() => ExchangeMove)
  // @JoinColumn({ name: 'exchange_move_id' })
  // exchange_move: ExchangeMove;

  /**
   * Currency of the debit journal item.
   */
  @Column({
    type: 'int'
  })
  debit_currency_id: number;

  // @ManyToOne(() => DebitCurrency)
  // @JoinColumn({ name: 'debit_currency_id' })
  // debit_currency: DebitCurrency;

  /**
   * Currency of the credit journal item.
   */
  @Column({
    type: 'int'
  })
  credit_currency_id: number;

  // @ManyToOne(() => CreditCurrency)
  // @JoinColumn({ name: 'credit_currency_id' })
  // credit_currency: CreditCurrency;

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
   * Max Date of Matched Lines
   */
  @Column({
    type: 'datetime'
  })
  max_date: Date;

  /**
   * Values that created the draft cash-basis entry
   */
  @Column({
    type: 'jsonb'
  })
  draft_caba_move_vals: object;

  /**
   * Amount
   */
  @Column({
    type: 'int'
  })
  amount: number;

  /**
   * Debit Amount Currency
   */
  @Column({
    type: 'int'
  })
  debit_amount_currency: number;

  /**
   * Credit Amount Currency
   */
  @Column({
    type: 'int'
  })
  credit_amount_currency: number;

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