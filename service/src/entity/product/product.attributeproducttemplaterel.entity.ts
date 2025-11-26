import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN product_attribute AND product_template
 */
@Entity('product_attribute_product_template_rel')
export class ProductAttributeProductTemplateRel {
  @Column({
    type: 'int'
  })
  product_attribute_id: number;

  // @ManyToOne(() => ProductAttribute)
  // @JoinColumn({ name: 'product_attribute_id' })
  // product_attribute: ProductAttribute;

  @Column({
    type: 'int'
  })
  product_template_id: number;

  // @ManyToOne(() => ProductTemplate)
  // @JoinColumn({ name: 'product_template_id' })
  // product_template: ProductTemplate;

}