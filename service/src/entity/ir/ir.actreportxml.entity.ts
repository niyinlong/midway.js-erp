import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('ir_act_report_xml')
export class IrActReportXml {
  /**
   * Paper Format
   */
  @Column({
    type: 'int'
  })
  paperformat_id: number;

  // @ManyToOne(() => Paperformat)
  // @JoinColumn({ name: 'paperformat_id' })
  // paperformat: Paperformat;

  /**
   * Model Name
   */
  @Column({
    type: 'varchar'
  })
  model: string;

  /**
   * Report Type
   */
  @Column({
    type: 'varchar'
  })
  report_type: string;

  /**
   * Template Name
   */
  @Column({
    type: 'varchar'
  })
  report_name: string;

  /**
   * Report File
   */
  @Column({
    type: 'varchar'
  })
  report_file: string;

  /**
   * Save as Attachment Prefix
   */
  @Column({
    type: 'varchar'
  })
  attachment: string;

  /**
   * Filter domain
   */
  @Column({
    type: 'varchar'
  })
  domain: string;

  /**
   * Printed Report Name
   */
  @Column({
    type: 'jsonb'
  })
  print_report_name: object;

  /**
   * On Multiple Doc.
   */
  @Column({
    type: 'boolean'
  })
  multi: boolean;

  /**
   * Reload from Attachment
   */
  @Column({
    type: 'boolean'
  })
  attachment_use: boolean;

  /**
   * Invoice report
   */
  @Column({
    type: 'boolean'
  })
  is_invoice_report: boolean;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

  @Column({
    type: 'varchar'
  })
  COLUMN: string;

  @Column({
    type: 'varchar'
  })
  COMMENT: string;

}