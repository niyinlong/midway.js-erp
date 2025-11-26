import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Task Stage
 */
@Entity('project_task_type')
export class ProjectTaskType {
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
   * Email Template
   */
  @Column({
    type: 'int'
  })
  mail_template_id: number;

  // @ManyToOne(() => MailTemplate)
  // @JoinColumn({ name: 'mail_template_id' })
  // mail_template: MailTemplate;

  /**
   * Color
   */
  @Column({
    type: 'int'
  })
  color: number;

  /**
   * Rating Email Template
   */
  @Column({
    type: 'int'
  })
  rating_template_id: number;

  // @ManyToOne(() => RatingTemplate)
  // @JoinColumn({ name: 'rating_template_id' })
  // rating_template: RatingTemplate;

  /**
   * Days to rot
   */
  @Column({
    type: 'int'
  })
  rotting_threshold_days: number;

  /**
   * Stage Owner
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

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
   * Customer Ratings Status
   */
  @Column({
    type: 'varchar'
  })
  rating_status: string;

  /**
   * Rating Frequency
   */
  @Column({
    type: 'varchar'
  })
  rating_status_period: string;

  /**
   * Name
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
   * Folded
   */
  @Column({
    type: 'boolean'
  })
  fold: boolean;

  /**
   * Automatic Kanban Status
   */
  @Column({
    type: 'boolean'
  })
  auto_validation_state: boolean;

  /**
   * Send a customer rating request
   */
  @Column({
    type: 'boolean'
  })
  rating_active: boolean;

  /**
   * Rating Request Deadline
   */
  @Column({
    type: 'datetime'
  })
  rating_request_deadline: Date;

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
   * SMS Template
   */
  @Column({
    type: 'int'
  })
  sms_template_id: number;

  // @ManyToOne(() => SmsTemplate)
  // @JoinColumn({ name: 'sms_template_id' })
  // sms_template: SmsTemplate;

}