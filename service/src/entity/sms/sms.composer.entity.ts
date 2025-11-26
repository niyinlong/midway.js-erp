import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Send SMS Wizard
 */
@Entity('sms_composer')
export class SmsComposer {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Use Template
   */
  @Column({
    type: 'int'
  })
  template_id: number;

  // @ManyToOne(() => Template)
  // @JoinColumn({ name: 'template_id' })
  // template: Template;

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
   * Composition Mode
   */
  @Column({
    type: 'varchar'
  })
  composition_mode: string;

  /**
   * Document Model Name
   */
  @Column({
    type: 'varchar'
  })
  res_model: string;

  /**
   * Document IDs
   */
  @Column({
    type: 'varchar'
  })
  res_ids: string;

  // @ManyToOne(() => Ress)
  // @JoinColumn({ name: 'res_ids' })
  // ress: Ress;

  /**
   * Recipient Number
   */
  @Column({
    type: 'varchar'
  })
  recipient_single_number_itf: string;

  /**
   * Number Field
   */
  @Column({
    type: 'varchar'
  })
  number_field_name: string;

  /**
   * Recipients (Numbers)
   */
  @Column({
    type: 'varchar'
  })
  numbers: string;

  /**
   * Message
   */
  @Column({
    type: 'varchar'
  })
  body: string;

  /**
   * Keep a note on document
   */
  @Column({
    type: 'boolean'
  })
  mass_keep_log: boolean;

  /**
   * Send directly
   */
  @Column({
    type: 'boolean'
  })
  mass_force_send: boolean;

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