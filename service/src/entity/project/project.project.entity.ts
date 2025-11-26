import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Project
 */
@Entity('project_project')
export class ProjectProject {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Project Account
   */
  @Column({
    type: 'int'
  })
  account_id: number;

  // @ManyToOne(() => Account)
  // @JoinColumn({ name: 'account_id' })
  // account: Account;

  /**
   * Alias
   */
  @Column({
    type: 'int'
  })
  alias_id: number;

  // @ManyToOne(() => Alias)
  // @JoinColumn({ name: 'alias_id' })
  // alias: Alias;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Color Index
   */
  @Column({
    type: 'int'
  })
  color: number;

  /**
   * Project Manager
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Stage
   */
  @Column({
    type: 'int'
  })
  stage_id: number;

  // @ManyToOne(() => Stage)
  // @JoinColumn({ name: 'stage_id' })
  // stage: Stage;

  /**
   * Last Update
   */
  @Column({
    type: 'int'
  })
  last_update_id: number;

  // @ManyToOne(() => LastUpdate)
  // @JoinColumn({ name: 'last_update_id' })
  // last_update: LastUpdate;

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
   * Security Token
   */
  @Column({
    type: 'varchar'
  })
  access_token: string;

  /**
   * Visibility
   */
  @Column({
    type: 'varchar'
  })
  privacy_visibility: string;

  /**
   * Last Update Status
   */
  @Column({
    type: 'varchar'
  })
  last_update_status: string;

  /**
   * Start Date
   */
  @Column({
    type: 'datetime'
  })
  date_start: Date;

  /**
   * Expiration Date
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Use Tasks as
   */
  @Column({
    type: 'jsonb'
  })
  label_tasks: object;

  /**
   * Task Properties
   */
  @Column({
    type: 'jsonb'
  })
  task_properties_definition: object;

  /**
   * Description
   */
  @Column({
    type: 'varchar'
  })
  description: string;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Task Dependencies
   */
  @Column({
    type: 'boolean'
  })
  allow_task_dependencies: boolean;

  /**
   * Milestones
   */
  @Column({
    type: 'boolean'
  })
  allow_milestones: boolean;

  /**
   * Recurring Tasks
   */
  @Column({
    type: 'boolean'
  })
  allow_recurring_tasks: boolean;

  /**
   * Is Template
   */
  @Column({
    type: 'boolean'
  })
  is_template: boolean;

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
   * Departments
   */
  @Column({
    type: 'int'
  })
  x_plan2_id: number;

  // @ManyToOne(() => XPlan2)
  // @JoinColumn({ name: 'x_plan2_id' })
  // x_plan2: XPlan2;

  /**
   * Internal
   */
  @Column({
    type: 'int'
  })
  x_plan3_id: number;

  // @ManyToOne(() => XPlan3)
  // @JoinColumn({ name: 'x_plan3_id' })
  // x_plan3: XPlan3;

  /**
   * Sales Order Item
   */
  @Column({
    type: 'int'
  })
  sale_line_id: number;

  // @ManyToOne(() => SaleLine)
  // @JoinColumn({ name: 'sale_line_id' })
  // sale_line: SaleLine;

  /**
   * Sales Order
   */
  @Column({
    type: 'int'
  })
  reinvoiced_sale_order_id: number;

  // @ManyToOne(() => ReinvoicedSaleOrder)
  // @JoinColumn({ name: 'reinvoiced_sale_order_id' })
  // reinvoiced_sale_order: ReinvoicedSaleOrder;

  /**
   * Billable
   */
  @Column({
    type: 'boolean'
  })
  allow_billable: boolean;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}