import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Scheduled Message
 */
@Entity('mail_scheduled_message')
export class MailScheduledMessage {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Related Document Id
   */
  @Column({
    type: 'int'
  })
  res_id: number;

  // @ManyToOne(() => Res)
  // @JoinColumn({ name: 'res_id' })
  // res: Res;

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
   * Sending Context
   */
  @Column({
    type: 'jsonb'
  })
  send_context: object;

  /**
   * Contents
   */
  @Column({
    type: 'varchar'
  })
  body: string;

  /**
   * Notification parameters
   */
  @Column({
    type: 'varchar'
  })
  notification_parameters: string;

  /**
   * Is a note
   */
  @Column({
    type: 'boolean'
  })
  is_note: boolean;

  /**
   * Scheduled Date
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