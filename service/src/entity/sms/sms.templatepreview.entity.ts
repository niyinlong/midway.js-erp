import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * SMS Template Preview
 */
@Entity('sms_template_preview')
export class SmsTemplatePreview {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sms Template
   */
  @Column({
    type: 'int'
  })
  sms_template_id: number;

  // @ManyToOne(() => SmsTemplate)
  // @JoinColumn({ name: 'sms_template_id' })
  // sms_template: SmsTemplate;

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
   * Template Preview Language
   */
  @Column({
    type: 'varchar'
  })
  lang: string;

  /**
   * Record reference
   */
  @Column({
    type: 'varchar'
  })
  resource_ref: string;

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