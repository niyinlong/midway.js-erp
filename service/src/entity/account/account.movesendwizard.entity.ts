import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Account Move Send Wizard
 */
@Entity('account_move_send_wizard')
export class AccountMoveSendWizard {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Mail Template
   */
  @Column({
    type: 'int'
  })
  template_id: number;

  // @ManyToOne(() => Template)
  // @JoinColumn({ name: 'template_id' })
  // template: Template;

  /**
   * Move
   */
  @Column({
    type: 'int'
  })
  move_id: number;

  // @ManyToOne(() => Move)
  // @JoinColumn({ name: 'move_id' })
  // move: Move;

  /**
   * Invoice report
   */
  @Column({
    type: 'int'
  })
  pdf_report_id: number;

  // @ManyToOne(() => PdfReport)
  // @JoinColumn({ name: 'pdf_report_id' })
  // pdf_report: PdfReport;

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
   * Related Document Model
   */
  @Column({
    type: 'varchar'
  })
  model: string;

  /**
   * Template Name
   */
  @Column({
    type: 'varchar'
  })
  template_name: string;

  /**
   * Sending Method Checkboxes
   */
  @Column({
    type: 'jsonb'
  })
  sending_method_checkboxes: object;

  /**
   * Extra Edi Checkboxes
   */
  @Column({
    type: 'jsonb'
  })
  extra_edi_checkboxes: object;

  /**
   * Mail Attachments Widget
   */
  @Column({
    type: 'jsonb'
  })
  mail_attachments_widget: object;

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