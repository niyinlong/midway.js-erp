import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN product_template_attribute_exclusion AND product_template_attribute_value
 */
@Entity('product_attr_exclusion_value_ids_rel')
export class ProductAttrExclusionValueIdsRel {
  @Column({
    type: 'int'
  })
  product_template_attribute_exclusion_id: number;

  // @ManyToOne(() => ProductTemplateAttributeExclusion)
  // @JoinColumn({ name: 'product_template_attribute_exclusion_id' })
  // product_template_attribute_exclusion: ProductTemplateAttributeExclusion;

  @Column({
    type: 'int'
  })
  product_template_attribute_value_id: number;

  // @ManyToOne(() => ProductTemplateAttributeValue)
  // @JoinColumn({ name: 'product_template_attribute_value_id' })
  // product_template_attribute_value: ProductTemplateAttributeValue;

}