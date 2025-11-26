import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mrp_bom_byproduct AND product_template_attribute_value
 */
@Entity('mrp_bom_byproduct_product_template_attribute_value_rel')
export class MrpBomByproductProductTemplateAttributeValueRel {
  @Column({
    type: 'int'
  })
  mrp_bom_byproduct_id: number;

  // @ManyToOne(() => MrpBomByproduct)
  // @JoinColumn({ name: 'mrp_bom_byproduct_id' })
  // mrp_bom_byproduct: MrpBomByproduct;

  @Column({
    type: 'int'
  })
  product_template_attribute_value_id: number;

  // @ManyToOne(() => ProductTemplateAttributeValue)
  // @JoinColumn({ name: 'product_template_attribute_value_id' })
  // product_template_attribute_value: ProductTemplateAttributeValue;

}