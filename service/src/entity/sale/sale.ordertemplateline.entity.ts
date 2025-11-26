import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Quotation Template Line
 */
@Entity('sale_order_template_line')
export class SaleOrderTemplateLine {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Quotation Template Reference
   */
  @Column({
    type: 'int'
  })
  sale_order_template_id: number;

  // @ManyToOne(() => SaleOrderTemplate)
  // @JoinColumn({ name: 'sale_order_template_id' })
  // sale_order_template: SaleOrderTemplate;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  /**
   * Product
   */
  @Column({
    type: 'int'
  })
  product_id: number;

  // @ManyToOne(() => Product)
  // @JoinColumn({ name: 'product_id' })
  // product: Product;

  /**
   * Unit
   */
  @Column({
    type: 'int'
  })
  product_uom_id: number;

  // @ManyToOne(() => ProductUom)
  // @JoinColumn({ name: 'product_uom_id' })
  // product_uom: ProductUom;

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
   * Display Type
   */
  @Column({
    type: 'varchar'
  })
  display_type: string;

  /**
   * Description
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Quantity
   */
  @Column({
    type: 'int'
  })
  product_uom_qty: number;

  /**
   * Optional Line
   */
  @Column({
    type: 'boolean'
  })
  is_optional: boolean;

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

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}