import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN product_attribute_value AND product_template_attribute_line
 */
@Entity('product_attribute_value_product_template_attribute_line_rel')
export class ProductAttributeValueProductTemplateAttributeLineRel {
  @Column({
    type: 'int'
  })
  product_attribute_value_id: number;

  // @ManyToOne(() => ProductAttributeValue)
  // @JoinColumn({ name: 'product_attribute_value_id' })
  // product_attribute_value: ProductAttributeValue;

  @Column({
    type: 'int'
  })
  product_template_attribute_line_id: number;

  // @ManyToOne(() => ProductTemplateAttributeLine)
  // @JoinColumn({ name: 'product_template_attribute_line_id' })
  // product_template_attribute_line: ProductTemplateAttributeLine;

}