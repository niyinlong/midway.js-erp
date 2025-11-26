import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Product Document
 */
@Entity('product_document')
export class ProductDocument {
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
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

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
   * Sale : Visible at
   */
  @Column({
    type: 'varchar'
  })
  attached_on_sale: string;

  /**
   * MRP : Visible at
   */
  @Column({
    type: 'varchar'
  })
  attached_on_mrp: string;

}