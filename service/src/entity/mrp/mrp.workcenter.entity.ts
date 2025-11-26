import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Work Center
 */
@Entity('mrp_workcenter')
export class MrpWorkcenter {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Resource
   */
  @Column({
    type: 'int'
  })
  resource_id: number;

  // @ManyToOne(() => Resource)
  // @JoinColumn({ name: 'resource_id' })
  // resource: Resource;

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
   * Working Hours
   */
  @Column({
    type: 'int'
  })
  resource_calendar_id: number;

  // @ManyToOne(() => ResourceCalendar)
  // @JoinColumn({ name: 'resource_calendar_id' })
  // resource_calendar: ResourceCalendar;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Color
   */
  @Column({
    type: 'int'
  })
  color: number;

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
   * Work Center
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Code
   */
  @Column({
    type: 'varchar'
  })
  code: string;

  /**
   * Workcenter Status
   */
  @Column({
    type: 'varchar'
  })
  working_state: string;

  /**
   * Description
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
   * Time Efficiency
   */
  @Column({
    type: 'varchar'
  })
  time_efficiency: string;

  /**
   * Cost per hour
   */
  @Column({
    type: 'varchar'
  })
  costs_hour: string;

  /**
   * Setup Time
   */
  @Column({
    type: 'varchar'
  })
  time_start: string;

  /**
   * Cleanup Time
   */
  @Column({
    type: 'varchar'
  })
  time_stop: string;

  /**
   * OEE Target
   */
  @Column({
    type: 'varchar'
  })
  oee_target: string;

  /**
   * Expense Account
   */
  @Column({
    type: 'int'
  })
  expense_account_id: number;

  // @ManyToOne(() => ExpenseAccount)
  // @JoinColumn({ name: 'expense_account_id' })
  // expense_account: ExpenseAccount;

  /**
   * Analytic Distribution
   */
  @Column({
    type: 'jsonb'
  })
  analytic_distribution: object;

}