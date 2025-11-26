import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Outgoing SMS
 */
@Entity('sms_sms')
export class SmsSms {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Customer
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * Mail Message
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
   * UUID
   */
  @Column({
    type: 'varchar'
  })
  uuid: string;

  /**
   * Number
   */
  @Column({
    type: 'varchar'
  })
  number: string;

  /**
   * SMS Status
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Failure Type
   */
  @Column({
    type: 'varchar'
  })
  failure_type: string;

  /**
   * Body
   */
  @Column({
    type: 'varchar'
  })
  body: string;

  /**
   * Marked for deletion
   */
  @Column({
    type: 'boolean'
  })
  to_delete: boolean;

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