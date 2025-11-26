import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Company Document Layout
 */
@Entity('base_document_layout')
export class BaseDocumentLayout {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Report Layout
   */
  @Column({
    type: 'int'
  })
  report_layout_id: number;

  // @ManyToOne(() => ReportLayout)
  // @JoinColumn({ name: 'report_layout_id' })
  // report_layout: ReportLayout;

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
   * From Invoice
   */
  @Column({
    type: 'boolean'
  })
  from_invoice: boolean;

}