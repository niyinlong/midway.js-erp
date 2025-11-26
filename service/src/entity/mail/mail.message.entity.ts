import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Message
 */
@Entity('mail_message')
export class MailMessage {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Parent Message
   */
  @Column({
    type: 'int'
  })
  parent_id: number;

  // @ManyToOne(() => Parent)
  // @JoinColumn({ name: 'parent_id' })
  // parent: Parent;

  /**
   * Related Document ID
   */
  @Column({
    type: 'int'
  })
  res_id: number;

  // @ManyToOne(() => Res)
  // @JoinColumn({ name: 'res_id' })
  // res: Res;

  /**
   * Alias Domain
   */
  @Column({
    type: 'int'
  })
  record_alias_domain_id: number;

  // @ManyToOne(() => RecordAliasDomain)
  // @JoinColumn({ name: 'record_alias_domain_id' })
  // record_alias_domain: RecordAliasDomain;

  /**
   * Company
   */
  @Column({
    type: 'int'
  })
  record_company_id: number;

  // @ManyToOne(() => RecordCompany)
  // @JoinColumn({ name: 'record_company_id' })
  // record_company: RecordCompany;

  /**
   * Subtype
   */
  @Column({
    type: 'int'
  })
  subtype_id: number;

  // @ManyToOne(() => Subtype)
  // @JoinColumn({ name: 'subtype_id' })
  // subtype: Subtype;

  /**
   * Mail Activity Type
   */
  @Column({
    type: 'int'
  })
  mail_activity_type_id: number;

  // @ManyToOne(() => MailActivityType)
  // @JoinColumn({ name: 'mail_activity_type_id' })
  // mail_activity_type: MailActivityType;

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
   * Guest
   */
  @Column({
    type: 'int'
  })
  author_guest_id: number;

  // @ManyToOne(() => AuthorGuest)
  // @JoinColumn({ name: 'author_guest_id' })
  // author_guest: AuthorGuest;

  /**
   * Outgoing mail server
   */
  @Column({
    type: 'int'
  })
  mail_server_id: number;

  // @ManyToOne(() => MailServer)
  // @JoinColumn({ name: 'mail_server_id' })
  // mail_server: MailServer;

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
   * Subject
   */
  @Column({
    type: 'varchar'
  })
  subject: string;

  /**
   * Related Document Model
   */
  @Column({
    type: 'varchar'
  })
  model: string;

  /**
   * Type
   */
  @Column({
    type: 'varchar'
  })
  message_type: string;

  /**
   * From
   */
  @Column({
    type: 'varchar'
  })
  email_from: string;

  /**
   * Emails Cc
   */
  @Column({
    type: 'varchar'
  })
  incoming_email_cc: string;

  /**
   * emails To
   */
  @Column({
    type: 'varchar'
  })
  outgoing_email_to: string;

  /**
   * Message-Id
   */
  @Column({
    type: 'varchar'
  })
  message_id: string;

  // @ManyToOne(() => Message)
  // @JoinColumn({ name: 'message_id' })
  // message: Message;

  /**
   * Reply-To
   */
  @Column({
    type: 'varchar'
  })
  reply_to: string;

  /**
   * Layout
   */
  @Column({
    type: 'varchar'
  })
  email_layout_xmlid: string;

  /**
   * Contents
   */
  @Column({
    type: 'varchar'
  })
  body: string;

  /**
   * Emails To
   */
  @Column({
    type: 'varchar'
  })
  incoming_email_to: string;

  /**
   * Employee Only
   */
  @Column({
    type: 'boolean'
  })
  is_internal: boolean;

  /**
   * No threading for answers
   */
  @Column({
    type: 'boolean'
  })
  reply_to_force_new: boolean;

  /**
   * Email Add Signature
   */
  @Column({
    type: 'boolean'
  })
  email_add_signature: boolean;

  /**
   * Date
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

  /**
   * Pinned
   */
  @Column({
    type: 'datetime'
  })
  pinned_at: Date;

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