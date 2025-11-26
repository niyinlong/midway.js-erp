import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Analytic Account
 */
@Entity('account_analytic_account')
export class AccountAnalyticAccount {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Plan
   */
  @Column({
    type: 'int'
  })
  plan_id: number;

  // @ManyToOne(() => Plan)
  // @JoinColumn({ name: 'plan_id' })
  // plan: Plan;

  /**
   * Root Plan
   */
  @Column({
    type: 'int'
  })
  root_plan_id: number;

  // @ManyToOne(() => RootPlan)
  // @JoinColumn({ name: 'root_plan_id' })
  // root_plan: RootPlan;

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
   * Customer
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
   * Reference
   */
  @Column({
    type: 'varchar'
  })
  code: string;

  /**
   * Analytic Account
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

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