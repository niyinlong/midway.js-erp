import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Form fields of inside quotation documents.
 */
@Entity('sale_pdf_form_field')
export class SalePdfFormField {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Form Field Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Document Type
   */
  @Column({
    type: 'varchar'
  })
  document_type: string;

  /**
   * Path
   */
  @Column({
    type: 'varchar'
  })
  path: string;

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