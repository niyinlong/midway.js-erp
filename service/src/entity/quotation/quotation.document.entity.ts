import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Quotation''s Headers & Footers
 */
@Entity('quotation_document')
export class QuotationDocument {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Related attachment
   */
  @Column({
    type: 'int'
  })
  ir_attachment_id: number;

  // @ManyToOne(() => IrAttachment)
  // @JoinColumn({ name: 'ir_attachment_id' })
  // ir_attachment: IrAttachment;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Document Type
   */
  @Column({
    type: 'varchar'
  })
  document_type: string;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Add By Default
   */
  @Column({
    type: 'boolean'
  })
  add_by_default: boolean;

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