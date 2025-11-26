import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('ir_act_server')
export class IrActServer {
  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Parent Action
   */
  @Column({
    type: 'int'
  })
  parent_id: number;

  // @ManyToOne(() => Parent)
  // @JoinColumn({ name: 'parent_id' })
  // parent: Parent;

  /**
   * Record to Create
   */
  @Column({
    type: 'int'
  })
  crud_model_id: number;

  // @ManyToOne(() => CrudModel)
  // @JoinColumn({ name: 'crud_model_id' })
  // crud_model: CrudModel;

  /**
   * Link Field
   */
  @Column({
    type: 'int'
  })
  link_field_id: number;

  // @ManyToOne(() => LinkField)
  // @JoinColumn({ name: 'link_field_id' })
  // link_field: LinkField;

  /**
   * Field to Update
   */
  @Column({
    type: 'int'
  })
  update_field_id: number;

  // @ManyToOne(() => UpdateField)
  // @JoinColumn({ name: 'update_field_id' })
  // update_field: UpdateField;

  /**
   * Update Related Model
   */
  @Column({
    type: 'int'
  })
  update_related_model_id: number;

  // @ManyToOne(() => UpdateRelatedModel)
  // @JoinColumn({ name: 'update_related_model_id' })
  // update_related_model: UpdateRelatedModel;

  /**
   * Sequence to use
   */
  @Column({
    type: 'int'
  })
  sequence_id: number;

  // @ManyToOne(() => Sequence)
  // @JoinColumn({ name: 'sequence_id' })
  // sequence: Sequence;

  /**
   * Custom Value
   */
  @Column({
    type: 'int'
  })
  selection_value: number;

  /**
   * Automated Name
   */
  @Column({
    type: 'varchar'
  })
  automated_name: string;

  /**
   * Usage
   */
  @Column({
    type: 'varchar'
  })
  usage: string;

  /**
   * Type
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Field to Update Path
   */
  @Column({
    type: 'varchar'
  })
  update_path: string;

  /**
   * Many2many Operations
   */
  @Column({
    type: 'varchar'
  })
  update_m2m_operation: string;

  /**
   * Boolean Value
   */
  @Column({
    type: 'varchar'
  })
  update_boolean_value: string;

  /**
   * Value Type
   */
  @Column({
    type: 'varchar'
  })
  evaluation_type: string;

  /**
   * Record
   */
  @Column({
    type: 'varchar'
  })
  resource_ref: string;

  /**
   * Webhook URL
   */
  @Column({
    type: 'varchar'
  })
  webhook_url: string;

  /**
   * Python Code
   */
  @Column({
    type: 'varchar'
  })
  code: string;

  /**
   * Value
   */
  @Column({
    type: 'varchar'
  })
  value: string;

  /**
   * Html Value
   */
  @Column({
    type: 'varchar'
  })
  html_value: string;

  /**
   * Responsible
   */
  @Column({
    type: 'int'
  })
  activity_user_id: number;

  // @ManyToOne(() => ActivityUser)
  // @JoinColumn({ name: 'activity_user_id' })
  // activity_user: ActivityUser;

  /**
   * Activity Type
   */
  @Column({
    type: 'int'
  })
  activity_type_id: number;

  // @ManyToOne(() => ActivityType)
  // @JoinColumn({ name: 'activity_type_id' })
  // activity_type: ActivityType;

  /**
   * Email Template
   */
  @Column({
    type: 'int'
  })
  template_id: number;

  // @ManyToOne(() => Template)
  // @JoinColumn({ name: 'template_id' })
  // template: Template;

  /**
   * Due Date In
   */
  @Column({
    type: 'int'
  })
  activity_date_deadline_range: number;

  /**
   * Title
   */
  @Column({
    type: 'varchar'
  })
  activity_summary: string;

  /**
   * Followers Type
   */
  @Column({
    type: 'varchar'
  })
  followers_type: string;

  /**
   * Followers Field
   */
  @Column({
    type: 'varchar'
  })
  followers_partner_field_name: string;

  /**
   * Send Email As
   */
  @Column({
    type: 'varchar'
  })
  mail_post_method: string;

  /**
   * Due type
   */
  @Column({
    type: 'varchar'
  })
  activity_date_deadline_range_type: string;

  /**
   * User Type
   */
  @Column({
    type: 'varchar'
  })
  activity_user_type: string;

  /**
   * User Field
   */
  @Column({
    type: 'varchar'
  })
  activity_user_field_name: string;

  /**
   * Note
   */
  @Column({
    type: 'varchar'
  })
  activity_note: string;

  /**
   * Subscribe Recipients
   */
  @Column({
    type: 'boolean'
  })
  mail_post_autofollow: boolean;

  /**
   * SMS Template
   */
  @Column({
    type: 'int'
  })
  sms_template_id: number;

  // @ManyToOne(() => SmsTemplate)
  // @JoinColumn({ name: 'sms_template_id' })
  // sms_template: SmsTemplate;

  /**
   * Send SMS As
   */
  @Column({
    type: 'varchar'
  })
  sms_method: string;

  /**
   * Website Path
   */
  @Column({
    type: 'varchar'
  })
  website_path: string;

  /**
   * Available on the Website
   */
  @Column({
    type: 'boolean'
  })
  website_published: boolean;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

}