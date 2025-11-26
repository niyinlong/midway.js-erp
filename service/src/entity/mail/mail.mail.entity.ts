import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Outgoing Mails
 */
@Entity('mail_mail')
export class MailMail {
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
   * Inbound Mail Server
   */
  @Column({
    type: 'int'
  })
  fetchmail_server_id: number;

  // @ManyToOne(() => FetchmailServer)
  // @JoinColumn({ name: 'fetchmail_server_id' })
  // fetchmail_server: FetchmailServer;

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
   * Cc
   */
  @Column({
    type: 'varchar'
  })
  email_cc: string;

  /**
   * Status
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Failure type
   */
  @Column({
    type: 'varchar'
  })
  failure_type: string;

  /**
   * Text Contents
   */
  @Column({
    type: 'varchar'
  })
  body_html: string;

  /**
   * Headers
   */
  @Column({
    type: 'varchar'
  })
  headers: string;

  /**
   * To
   */
  @Column({
    type: 'varchar'
  })
  email_to: string;

  /**
   * Failure Reason
   */
  @Column({
    type: 'varchar'
  })
  failure_reason: string;

  /**
   * Notification Email
   */
  @Column({
    type: 'boolean'
  })
  is_notification: boolean;

  /**
   * Auto Delete
   */
  @Column({
    type: 'boolean'
  })
  auto_delete: boolean;

  /**
   * Scheduled Send Date
   */
  @Column({
    type: 'datetime'
  })
  scheduled_date: Date;

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