import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Email composition wizard
 */
@Entity('mail_compose_message')
export class MailComposeMessage {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Use template
   */
  @Column({
    type: 'int'
  })
  template_id: number;

  // @ManyToOne(() => Template)
  // @JoinColumn({ name: 'template_id' })
  // template: Template;

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
   * Responsible
   */
  @Column({
    type: 'int'
  })
  res_domain_user_id: number;

  // @ManyToOne(() => ResDomainUser)
  // @JoinColumn({ name: 'res_domain_user_id' })
  // res_domain_user: ResDomainUser;

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
   * Language
   */
  @Column({
    type: 'varchar'
  })
  lang: string;

  /**
   * Subject
   */
  @Column({
    type: 'varchar'
  })
  subject: string;

  /**
   * Email Notification Layout
   */
  @Column({
    type: 'varchar'
  })
  email_layout_xmlid: string;

  /**
   * From
   */
  @Column({
    type: 'varchar'
  })
  email_from: string;

  /**
   * Composition mode
   */
  @Column({
    type: 'varchar'
  })
  composition_mode: string;

  /**
   * Comment Options
   */
  @Column({
    type: 'varchar'
  })
  composition_comment_option: string;

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
   * Reply To
   */
  @Column({
    type: 'varchar'
  })
  reply_to: string;

  /**
   * Scheduled Date
   */
  @Column({
    type: 'varchar'
  })
  scheduled_date: string;

  /**
   * Template Name
   */
  @Column({
    type: 'varchar'
  })
  template_name: string;

  /**
   * Contents
   */
  @Column({
    type: 'varchar'
  })
  body: string;

  /**
   * Related Document IDs
   */
  @Column({
    type: 'varchar'
  })
  res_ids: string;

  // @ManyToOne(() => Ress)
  // @JoinColumn({ name: 'res_ids' })
  // ress: Ress;

  /**
   * Active domain
   */
  @Column({
    type: 'varchar'
  })
  res_domain: string;

  /**
   * Add signature
   */
  @Column({
    type: 'boolean'
  })
  email_add_signature: boolean;

  /**
   * Considers answers as new thread
   */
  @Column({
    type: 'boolean'
  })
  reply_to_force_new: boolean;

  /**
   * Delete Emails
   */
  @Column({
    type: 'boolean'
  })
  auto_delete: boolean;

  /**
   * Keep Message Copy
   */
  @Column({
    type: 'boolean'
  })
  auto_delete_keep_log: boolean;

  /**
   * Send mailing or notifications directly
   */
  @Column({
    type: 'boolean'
  })
  force_send: boolean;

  /**
   * Notify Author
   */
  @Column({
    type: 'boolean'
  })
  notify_author: boolean;

  /**
   * Notify Author Mention
   */
  @Column({
    type: 'boolean'
  })
  notify_author_mention: boolean;

  /**
   * Notify Skip Followers
   */
  @Column({
    type: 'boolean'
  })
  notify_skip_followers: boolean;

  /**
   * Use Exclusion List
   */
  @Column({
    type: 'boolean'
  })
  use_exclusion_list: boolean;

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