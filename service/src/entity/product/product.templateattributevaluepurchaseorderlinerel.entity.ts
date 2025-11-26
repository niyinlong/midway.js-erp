import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN purchase_order_line AND product_template_attribute_value
 */
@Entity('product_template_attribute_value_purchase_order_line_rel')
export class ProductTemplateAttributeValuePurchaseOrderLineRel {
  @Column({
    type: 'int'
  })
  purchase_order_line_id: number;

  // @ManyToOne(() => PurchaseOrderLine)
  // @JoinColumn({ name: 'purchase_order_line_id' })
  // purchase_order_line: PurchaseOrderLine;

  @Column({
    type: 'int'
  })
  product_template_attribute_value_id: number;

  // @ManyToOne(() => ProductTemplateAttributeValue)
  // @JoinColumn({ name: 'product_template_attribute_value_id' })
  // product_template_attribute_value: ProductTemplateAttributeValue;

}