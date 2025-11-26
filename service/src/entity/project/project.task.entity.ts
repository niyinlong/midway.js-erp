import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Task
 */
@Entity('project_task')
export class ProjectTask {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Project
   */
  @Column({
    type: 'int'
  })
  project_id: number;

  // @ManyToOne(() => Project)
  // @JoinColumn({ name: 'project_id' })
  // project: Project;

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
   * Cover Image
   */
  @Column({
    type: 'int'
  })
  displayed_image_id: number;

  // @ManyToOne(() => DisplayedImage)
  // @JoinColumn({ name: 'displayed_image_id' })
  // displayed_image: DisplayedImage;

  /**
   * Parent Task
   */
  @Column({
    type: 'int'
  })
  parent_id: number;

  // @ManyToOne(() => Parent)
  // @JoinColumn({ name: 'parent_id' })
  // parent: Parent;

  /**
   * Milestone
   */
  @Column({
    type: 'int'
  })
  milestone_id: number;

  // @ManyToOne(() => Milestone)
  // @JoinColumn({ name: 'milestone_id' })
  // milestone: Milestone;

  /**
   * Recurrence
   */
  @Column({
    type: 'int'
  })
  recurrence_id: number;

  // @ManyToOne(() => Recurrence)
  // @JoinColumn({ name: 'recurrence_id' })
  // recurrence: Recurrence;

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
   * Email cc
   */
  @Column({
    type: 'varchar'
  })
  email_cc: string;

  /**
   * Security Token
   */
  @Column({
    type: 'varchar'
  })
  access_token: string;

  /**
   * Title
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Priority
   */
  @Column({
    type: 'varchar'
  })
  priority: string;

  /**
   * State
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Contact Number
   */
  @Column({
    type: 'varchar'
  })
  partner_phone: string;

  /**
   * Email From
   */
  @Column({
    type: 'varchar'
  })
  email_from: string;

  /**
   * History data
   */
  @Column({
    type: 'jsonb'
  })
  html_field_history: object;

  /**
   * Properties
   */
  @Column({
    type: 'jsonb'
  })
  task_properties: object;

  /**
   * Description
   */
  @Column({
    type: 'varchar'
  })
  description: string;

  /**
   * Working Hours to Assign
   */
  @Column({
    type: 'int'
  })
  working_hours_open: number;

  /**
   * Working Hours to Close
   */
  @Column({
    type: 'int'
  })
  working_hours_close: number;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Display In Project
   */
  @Column({
    type: 'boolean'
  })
  display_in_project: boolean;

  /**
   * Recurrent
   */
  @Column({
    type: 'boolean'
  })
  recurring_task: boolean;

  /**
   * Is Template
   */
  @Column({
    type: 'boolean'
  })
  is_template: boolean;

  /**
   * Has Template Ancestor
   */
  @Column({
    type: 'boolean'
  })
  has_template_ancestor: boolean;

  /**
   * Created On
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

  /**
   * Last Updated On
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

  /**
   * Ending Date
   */
  @Column({
    type: 'datetime'
  })
  date_end: Date;

  /**
   * Assigning Date
   */
  @Column({
    type: 'datetime'
  })
  date_assign: Date;

  /**
   * Deadline
   */
  @Column({
    type: 'datetime'
  })
  date_deadline: Date;

  /**
   * Last Stage Update
   */
  @Column({
    type: 'datetime'
  })
  date_last_stage_update: Date;

  /**
   * Rating Last Value
   */
  @Column({
    type: 'varchar'
  })
  rating_last_value: string;

  /**
   * Allocated Time
   */
  @Column({
    type: 'varchar'
  })
  allocated_hours: string;

  /**
   * Working Days to Assign
   */
  @Column({
    type: 'varchar'
  })
  working_days_open: string;

  /**
   * Working Days to Close
   */
  @Column({
    type: 'varchar'
  })
  working_days_close: string;

  /**
   * Sales Order
   */
  @Column({
    type: 'int'
  })
  sale_order_id: number;

  // @ManyToOne(() => SaleOrder)
  // @JoinColumn({ name: 'sale_order_id' })
  // sale_order: SaleOrder;

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
   * Customer Name
   */
  @Column({
    type: 'varchar'
  })
  partner_name: string;

  /**
   * Company Name
   */
  @Column({
    type: 'varchar'
  })
  partner_company_name: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}