import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Product Template Attribute Value
 */
@Entity('product_template_attribute_value')
export class ProductTemplateAttributeValue {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Attribute Value
   */
  @Column({
    type: 'int'
  })
  product_attribute_value_id: number;

  // @ManyToOne(() => ProductAttributeValue)
  // @JoinColumn({ name: 'product_attribute_value_id' })
  // product_attribute_value: ProductAttributeValue;

  /**
   * Attribute Line
   */
  @Column({
    type: 'int'
  })
  attribute_line_id: number;

  // @ManyToOne(() => AttributeLine)
  // @JoinColumn({ name: 'attribute_line_id' })
  // attribute_line: AttributeLine;

  /**
   * Product Template
   */
  @Column({
    type: 'int'
  })
  product_tmpl_id: number;

  // @ManyToOne(() => ProductTmpl)
  // @JoinColumn({ name: 'product_tmpl_id' })
  // product_tmpl: ProductTmpl;

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
   * Color
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
   * Extra Price
   */
  @Column({
    type: 'int'
  })
  price_extra: number;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  ptav_active: boolean;

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