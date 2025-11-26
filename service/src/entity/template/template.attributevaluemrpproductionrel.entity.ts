import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mrp_production AND product_template_attribute_value
 */
@Entity('template_attribute_value_mrp_production_rel')
export class TemplateAttributeValueMrpProductionRel {
  @Column({
    type: 'int'
  })
  production_id: number;

  // @ManyToOne(() => Production)
  // @JoinColumn({ name: 'production_id' })
  // production: Production;

  @Column({
    type: 'int'
  })
  template_attribute_value_id: number;

  // @ManyToOne(() => TemplateAttributeValue)
  // @JoinColumn({ name: 'template_attribute_value_id' })
  // template_attribute_value: TemplateAttributeValue;

}