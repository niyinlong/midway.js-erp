import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Project Stage
 */
@Entity('project_project_stage')
export class ProjectProjectStage {
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