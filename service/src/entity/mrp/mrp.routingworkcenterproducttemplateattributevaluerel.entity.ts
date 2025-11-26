import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mrp_routing_workcenter AND product_template_attribute_value
 */
@Entity('mrp_routing_workcenter_product_template_attribute_value_rel')
export class MrpRoutingWorkcenterProductTemplateAttributeValueRel {
  @Column({
    type: 'int'
  })
  mrp_routing_workcenter_id: number;

  // @ManyToOne(() => MrpRoutingWorkcenter)
  // @JoinColumn({ name: 'mrp_routing_workcenter_id' })
  // mrp_routing_workcenter: MrpRoutingWorkcenter;

  @Column({
    type: 'int'
  })
  product_template_attribute_value_id: number;

  // @ManyToOne(() => ProductTemplateAttributeValue)
  // @JoinColumn({ name: 'product_template_attribute_value_id' })
  // product_template_attribute_value: ProductTemplateAttributeValue;

}