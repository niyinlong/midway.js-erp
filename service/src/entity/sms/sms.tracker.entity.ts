import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Link SMS to mailing/sms tracking models
 */
@Entity('sms_tracker')
export class SmsTracker {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Mail Notification
   */
  @Column({
    type: 'int'
  })
  mail_notification_id: number;

  // @ManyToOne(() => MailNotification)
  // @JoinColumn({ name: 'mail_notification_id' })
  // mail_notification: MailNotification;

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
   * SMS uuid
   */
  @Column({
    type: 'varchar'
  })
  sms_uuid: string;

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