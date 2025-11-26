import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Message Notifications
 */
@Entity('mail_notification')
export class MailNotification {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Author
   */
  @Column({
    type: 'int'
  })
  author_id: number;

  // @ManyToOne(() => Author)
  // @JoinColumn({ name: 'author_id' })
  // author: Author;

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
   * Mail
   */
  @Column({
    type: 'int'
  })
  mail_mail_id: number;

  // @ManyToOne(() => MailMail)
  // @JoinColumn({ name: 'mail_mail_id' })
  // mail_mail: MailMail;

  /**
   * Recipient
   */
  @Column({
    type: 'int'
  })
  res_partner_id: number;

  // @ManyToOne(() => ResPartner)
  // @JoinColumn({ name: 'res_partner_id' })
  // res_partner: ResPartner;

  /**
   * Mail Email Address
   */
  @Column({
    type: 'varchar'
  })
  mail_email_address: string;

  /**
   * Notification Type
   */
  @Column({
    type: 'varchar'
  })
  notification_type: string;

  /**
   * Status
   */
  @Column({
    type: 'varchar'
  })
  notification_status: string;

  /**
   * Failure type
   */
  @Column({
    type: 'varchar'
  })
  failure_type: string;

  /**
   * Failure reason
   */
  @Column({
    type: 'varchar'
  })
  failure_reason: string;

  /**
   * Is Read
   */
  @Column({
    type: 'boolean'
  })
  is_read: boolean;

  /**
   * Read Date
   */
  @Column({
    type: 'datetime'
  })
  read_date: Date;

  /**
   * SMS ID
   */
  @Column({
    type: 'int'
  })
  sms_id_int: number;

  // @ManyToOne(() => SmsInt)
  // @JoinColumn({ name: 'sms_id_int' })
  // sms_int: SmsInt;

  /**
   * SMS Number
   */
  @Column({
    type: 'varchar'
  })
  sms_number: string;

  /**
   * Snailmail Letter
   */
  @Column({
    type: 'int'
  })
  letter_id: number;

  // @ManyToOne(() => Letter)
  // @JoinColumn({ name: 'letter_id' })
  // letter: Letter;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}