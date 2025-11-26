import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Snailmail Letter
 */
@Entity('snailmail_letter')
export class SnailmailLetter {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sent by
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Document ID
   */
  @Column({
    type: 'int'
  })
  res_id: number;

  // @ManyToOne(() => Res)
  // @JoinColumn({ name: 'res_id' })
  // res: Res;

  /**
   * Recipient
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  /**
   * Optional report to print and attach
   */
  @Column({
    type: 'int'
  })
  report_template: number;

  /**
   * Attachment
   */
  @Column({
    type: 'int'
  })
  attachment_id: number;

  // @ManyToOne(() => Attachment)
  // @JoinColumn({ name: 'attachment_id' })
  // attachment: Attachment;

  /**
   * Snailmail Status Message
   */
  @Column({
    type: 'int'
  })
  message_id: number;

  // @ManyToOne(() => Message)
  // @JoinColumn({ name: 'message_id' })
  // message: Message;

  /**
   * State
   */
  @Column({
    type: 'int'
  })
  state_id: number;

  // @ManyToOne(() => State)
  // @JoinColumn({ name: 'state_id' })
  // state: State;

  /**
   * Country
   */
  @Column({
    type: 'int'
  })
  country_id: number;

  // @ManyToOne(() => Country)
  // @JoinColumn({ name: 'country_id' })
  // country: Country;

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
   * Model
   */
  @Column({
    type: 'varchar'
  })
  model: string;

  /**
   * Status
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Error
   */
  @Column({
    type: 'varchar'
  })
  error_code: string;

  /**
   * Street
   */
  @Column({
    type: 'varchar'
  })
  street: string;

  /**
   * Street2
   */
  @Column({
    type: 'varchar'
  })
  street2: string;

  /**
   * Zip
   */
  @Column({
    type: 'varchar'
  })
  zip: string;

  /**
   * City
   */
  @Column({
    type: 'varchar'
  })
  city: string;

  /**
   * Information
   */
  @Column({
    type: 'varchar'
  })
  info_msg: string;

  /**
   * Color
   */
  @Column({
    type: 'boolean'
  })
  color: boolean;

  /**
   * Cover Page
   */
  @Column({
    type: 'boolean'
  })
  cover: boolean;

  /**
   * Both side
   */
  @Column({
    type: 'boolean'
  })
  duplex: boolean;

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