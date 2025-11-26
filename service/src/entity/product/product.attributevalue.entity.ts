import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Attribute Value
 */
@Entity('product_attribute_value')
export class ProductAttributeValue {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Attribute
   */
  @Column({
    type: 'int'
  })
  attribute_id: number;

  // @ManyToOne(() => Attribute)
  // @JoinColumn({ name: 'attribute_id' })
  // attribute: Attribute;

  /**
   * Color Index
   */
  @Column({
    type: 'int'
  })
  color: number;

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
   * Color
   */
  @Column({
    type: 'varchar'
  })
  html_color: string;

  /**
   * Value
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Free text
   */
  @Column({
    type: 'boolean'
  })
  is_custom: boolean;

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
   * Default Extra Price
   */
  @Column({
    type: 'varchar'
  })
  default_extra_price: string;

}