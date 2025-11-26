import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Account Cash Rounding
 */
@Entity('account_cash_rounding')
export class AccountCashRounding {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Rounding Strategy
   */
  @Column({
    type: 'varchar'
  })
  strategy: string;

  /**
   * Rounding Method
   */
  @Column({
    type: 'varchar'
  })
  rounding_method: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Profit Account
   */
  @Column({
    type: 'jsonb'
  })
  profit_account_id: object;

  // @ManyToOne(() => ProfitAccount)
  // @JoinColumn({ name: 'profit_account_id' })
  // profit_account: ProfitAccount;

  /**
   * Loss Account
   */
  @Column({
    type: 'jsonb'
  })
  loss_account_id: object;

  // @ManyToOne(() => LossAccount)
  // @JoinColumn({ name: 'loss_account_id' })
  // loss_account: LossAccount;

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
   * Rounding Precision
   */
  @Column({
    type: 'varchar'
  })
  rounding: string;

}