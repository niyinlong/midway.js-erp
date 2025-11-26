import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN sale_order_line AND product_template_attribute_value
 */
@Entity('product_template_attribute_value_sale_order_line_rel')
export class ProductTemplateAttributeValueSaleOrderLineRel {
  @Column({
    type: 'int'
  })
  sale_order_line_id: number;

  // @ManyToOne(() => SaleOrderLine)
  // @JoinColumn({ name: 'sale_order_line_id' })
  // sale_order_line: SaleOrderLine;

  @Column({
    type: 'int'
  })
  product_template_attribute_value_id: number;

  // @ManyToOne(() => ProductTemplateAttributeValue)
  // @JoinColumn({ name: 'product_template_attribute_value_id' })
  // product_template_attribute_value: ProductTemplateAttributeValue;

}