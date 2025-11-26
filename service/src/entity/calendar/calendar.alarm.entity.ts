import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Event Alarm
 */
@Entity('calendar_alarm')
export class CalendarAlarm {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Remind Before
   */
  @Column({
    type: 'int'
  })
  duration: number;

  /**
   * Duration in minutes
   */
  @Column({
    type: 'int'
  })
  duration_minutes: number;

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
   * Type
   */
  @Column({
    type: 'varchar'
  })
  alarm_type: string;

  @Column({
    type: 'varchar'
  })
  character: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Additional Message
   */
  @Column({
    type: 'varchar'
  })
  body: string;

  /**
   * Notify Responsible
   */
  @Column({
    type: 'boolean'
  })
  notify_responsible: boolean;

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