import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Mail Tracking Value
 */
@Entity('mail_tracking_value')
export class MailTrackingValue {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Field
   */
  @Column({
    type: 'int'
  })
  field_id: number;

  // @ManyToOne(() => Field)
  // @JoinColumn({ name: 'field_id' })
  // field: Field;

  /**
   * Old Value Integer
   */
  @Column({
    type: 'int'
  })
  old_value_integer: number;

  /**
   * New Value Integer
   */
  @Column({
    type: 'int'
  })
  new_value_integer: number;

  /**
   * Currency
   */
  @Column({
    type: 'int'
  })
  currency_id: number;

  // @ManyToOne(() => Currency)
  // @JoinColumn({ name: 'currency_id' })
  // currency: Currency;

  /**
   * Message ID
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
   * Old Value Char
   */
  @Column({
    type: 'varchar'
  })
  old_value_char: string;

  /**
   * New Value Char
   */
  @Column({
    type: 'varchar'
  })
  new_value_char: string;

  /**
   * Removed field information
   */
  @Column({
    type: 'jsonb'
  })
  field_info: object;

  /**
   * Old Value Text
   */
  @Column({
    type: 'varchar'
  })
  old_value_text: string;

  /**
   * New Value Text
   */
  @Column({
    type: 'varchar'
  })
  new_value_text: string;

  /**
   * Old Value DateTime
   */
  @Column({
    type: 'datetime'
  })
  old_value_datetime: Date;

  /**
   * New Value Datetime
   */
  @Column({
    type: 'datetime'
  })
  new_value_datetime: Date;

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
   * Old Value Float
   */
  @Column({
    type: 'varchar'
  })
  old_value_float: string;

  /**
   * New Value Float
   */
  @Column({
    type: 'varchar'
  })
  new_value_float: string;

}