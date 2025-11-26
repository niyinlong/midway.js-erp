import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Email Template Preview
 */
@Entity('mail_template_preview')
export class MailTemplatePreview {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Related Mail Template
   */
  @Column({
    type: 'int'
  })
  mail_template_id: number;

  // @ManyToOne(() => MailTemplate)
  // @JoinColumn({ name: 'mail_template_id' })
  // mail_template: MailTemplate;

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
   * Record
   */
  @Column({
    type: 'varchar'
  })
  resource_ref: string;

  /**
   * Template Preview Language
   */
  @Column({
    type: 'varchar'
  })
  lang: string;

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