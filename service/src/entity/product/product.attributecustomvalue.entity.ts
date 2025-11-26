import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Product Attribute Custom Value
 */
@Entity('product_attribute_custom_value')
export class ProductAttributeCustomValue {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Attribute Value
   */
  @Column({
    type: 'int'
  })
  custom_product_template_attribute_value_id: number;

  // @ManyToOne(() => CustomProductTemplateAttributeValue)
  // @JoinColumn({ name: 'custom_product_template_attribute_value_id' })
  // custom_product_template_attribute_value: CustomProductTemplateAttributeValue;

  /**
   * Created by
   */
  @Column({
    type: 'int'
  })
  create_uid: number;

  /**
   * Last Updated by
   */
  @Column({
    type: 'int'
  })
  write_uid: number;

  /**
   * Custom Value
   */
  @Column({
    type: 'varchar'
  })
  custom_value: string;

  /**
   * Created on
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

  /**
   * Sales Order Line
   */
  @Column({
    type: 'int'
  })
  sale_order_line_id: number;

  // @ManyToOne(() => SaleOrderLine)
  // @JoinColumn({ name: 'sale_order_line_id' })
  // sale_order_line: SaleOrderLine;

}