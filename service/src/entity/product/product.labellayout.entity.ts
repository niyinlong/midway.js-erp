import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Choose the sheet layout to print the labels
 */
@Entity('product_label_layout')
export class ProductLabelLayout {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Copies
   */
  @Column({
    type: 'int'
  })
  custom_quantity: number;

  /**
   * Pricelist
   */
  @Column({
    type: 'int'
  })
  pricelist_id: number;

  // @ManyToOne(() => Pricelist)
  // @JoinColumn({ name: 'pricelist_id' })
  // pricelist: Pricelist;

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
   * Format
   */
  @Column({
    type: 'varchar'
  })
  print_format: string;

  /**
   * Extra Content
   */
  @Column({
    type: 'varchar'
  })
  extra_html: string;

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
   * Quantity to print
   */
  @Column({
    type: 'varchar'
  })
  move_quantity: string;

  /**
   * ZPL Template
   */
  @Column({
    type: 'varchar'
  })
  zpl_template: string;

}