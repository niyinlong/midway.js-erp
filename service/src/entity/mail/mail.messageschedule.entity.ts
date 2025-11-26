import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Scheduled Messages
 */
@Entity('mail_message_schedule')
export class MailMessageSchedule {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Message
   */
  @Column({
    type: 'int'
  })
  mail_message_id: number;

  // @ManyToOne(() => MailMessage)
  // @JoinColumn({ name: 'mail_message_id' })
  // mail_message: MailMessage;

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
   * Notification Parameter
   */
  @Column({
    type: 'varchar'
  })
  notification_parameters: string;

  /**
   * Scheduled Send Date
   */
  @Column({
    type: 'datetime'
  })
  scheduled_datetime: Date;

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