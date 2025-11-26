import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mrp_bom_line AND product_template_attribute_value
 */
@Entity('mrp_bom_line_product_template_attribute_value_rel')
export class MrpBomLineProductTemplateAttributeValueRel {
  @Column({
    type: 'int'
  })
  mrp_bom_line_id: number;

  // @ManyToOne(() => MrpBomLine)
  // @JoinColumn({ name: 'mrp_bom_line_id' })
  // mrp_bom_line: MrpBomLine;

  @Column({
    type: 'int'
  })
  product_template_attribute_value_id: number;

  // @ManyToOne(() => ProductTemplateAttributeValue)
  // @JoinColumn({ name: 'product_template_attribute_value_id' })
  // product_template_attribute_value: ProductTemplateAttributeValue;

}