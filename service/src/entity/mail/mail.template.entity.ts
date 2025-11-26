import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Email Templates
 */
@Entity('mail_template')
export class MailTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Applies to
   */
  @Column({
    type: 'int'
  })
  model_id: number;

  // @ManyToOne(() => Model)
  // @JoinColumn({ name: 'model_id' })
  // model: Model;

  /**
   * Owner
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Outgoing Mail Server
   */
  @Column({
    type: 'int'
  })
  mail_server_id: number;

  // @ManyToOne(() => MailServer)
  // @JoinColumn({ name: 'mail_server_id' })
  // mail_server: MailServer;

  /**
   * Sidebar action
   */
  @Column({
    type: 'int'
  })
  ref_ir_act_window: number;

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
   * Template Filename
   */
  @Column({
    type: 'varchar'
  })
  template_fs: string;

  /**
   * Language
   */
  @Column({
    type: 'varchar'
  })
  lang: string;

  /**
   * Related Document Model
   */
  @Column({
    type: 'varchar'
  })
  model: string;

  /**
   * Send From
   */
  @Column({
    type: 'varchar'
  })
  email_from: string;

  /**
   * To (Emails)
   */
  @Column({
    type: 'varchar'
  })
  email_to: string;

  /**
   * To (Partners)
   */
  @Column({
    type: 'varchar'
  })
  partner_to: string;

  /**
   * Cc
   */
  @Column({
    type: 'varchar'
  })
  email_cc: string;

  /**
   * Reply To
   */
  @Column({
    type: 'varchar'
  })
  reply_to: string;

  /**
   * Email Notification Layout
   */
  @Column({
    type: 'varchar'
  })
  email_layout_xmlid: string;

  /**
   * Scheduled Date
   */
  @Column({
    type: 'varchar'
  })
  scheduled_date: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Template Description
   */
  @Column({
    type: 'jsonb'
  })
  description: object;

  /**
   * Subject
   */
  @Column({
    type: 'jsonb'
  })
  subject: object;

  /**
   * Body
   */
  @Column({
    type: 'jsonb'
  })
  body_html: object;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Default Recipients
   */
  @Column({
    type: 'boolean'
  })
  use_default_to: boolean;

  /**
   * Auto Delete
   */
  @Column({
    type: 'boolean'
  })
  auto_delete: boolean;

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