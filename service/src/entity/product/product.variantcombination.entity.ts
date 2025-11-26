import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN product_product AND product_template_attribute_value
 */
@Entity('product_variant_combination')
export class ProductVariantCombination {
  @Column({
    type: 'int'
  })
  product_product_id: number;

  // @ManyToOne(() => ProductProduct)
  // @JoinColumn({ name: 'product_product_id' })
  // product_product: ProductProduct;

  @Column({
    type: 'int'
  })
  product_template_attribute_value_id: number;

  // @ManyToOne(() => ProductTemplateAttributeValue)
  // @JoinColumn({ name: 'product_template_attribute_value_id' })
  // product_template_attribute_value: ProductTemplateAttributeValue;

}