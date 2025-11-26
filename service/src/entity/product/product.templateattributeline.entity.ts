import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Product Template Attribute Line
 */
@Entity('product_template_attribute_line')
export class ProductTemplateAttributeLine {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Value Count
   */
  @Column({
    type: 'int'
  })
  value_count: number;

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

}