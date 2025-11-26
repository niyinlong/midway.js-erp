import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Choose the sheet layout to print lot labels
 */
@Entity('lot_label_layout')
export class LotLabelLayout {
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
   * Quantity to print
   */
  @Column({
    type: 'varchar'
  })
  label_quantity: string;

  /**
   * Format
   */
  @Column({
    type: 'varchar'
  })
  print_format: string;

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