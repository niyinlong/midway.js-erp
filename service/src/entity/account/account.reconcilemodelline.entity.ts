import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Rules for the reconciliation model
 */
@Entity('account_reconcile_model_line')
export class AccountReconcileModelLine {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Model
   */
  @Column({
    type: 'int'
  })
  model_id: number;

  // @ManyToOne(() => Model)
  // @JoinColumn({ name: 'model_id' })
  // model: Model;

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
   * Amount Type
   */
  @Column({
    type: 'varchar'
  })
  amount_type: string;

  /**
   * Amount
   */
  @Column({
    type: 'varchar'
  })
  amount_string: string;

  /**
   * Analytic Distribution
   */
  @Column({
    type: 'jsonb'
  })
  analytic_distribution: object;

  /**
   * Label
   */
  @Column({
    type: 'jsonb'
  })
  label: object;

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
   * Float Amount
   */
  @Column({
    type: 'varchar'
  })
  amount: string;

}