import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Purchase Order Line
 */
@Entity('purchase_order_line')
export class PurchaseOrderLine {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Order Reference
   */
  @Column({
    type: 'int'
  })
  order_id: number;

  // @ManyToOne(() => Order)
  // @JoinColumn({ name: 'order_id' })
  // order: Order;

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
   * Partner
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

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
   * Received Qty Method
   */
  @Column({
    type: 'varchar'
  })
  qty_received_method: string;

  /**
   * Display Type
   */
  @Column({
    type: 'varchar'
  })
  display_type: string;

  /**
   * Analytic Distribution
   */
  @Column({
    type: 'jsonb'
  })
  analytic_distribution: object;

  /**
   * Description
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Quantity
   */
  @Column({
    type: 'int'
  })
  product_qty: number;

  /**
   * Discount (%)
   */
  @Column({
    type: 'int'
  })
  discount: number;

  /**
   * Unit Price
   */
  @Column({
    type: 'int'
  })
  price_unit: number;

  /**
   * Subtotal
   */
  @Column({
    type: 'int'
  })
  price_subtotal: number;

  /**
   * Total
   */
  @Column({
    type: 'int'
  })
  price_total: number;

  /**
   * Billed Qty
   */
  @Column({
    type: 'int'
  })
  qty_invoiced: number;

  /**
   * Received Qty
   */
  @Column({
    type: 'int'
  })
  qty_received: number;

  /**
   * Manual Received Qty
   */
  @Column({
    type: 'int'
  })
  qty_received_manual: number;

  /**
   * To Invoice Quantity
   */
  @Column({
    type: 'int'
  })
  qty_to_invoice: number;

  /**
   * Is Downpayment
   */
  @Column({
    type: 'boolean'
  })
  is_downpayment: boolean;

  /**
   * Expected Arrival
   */
  @Column({
    type: 'datetime'
  })
  date_planned: Date;

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
   * Total Quantity
   */
  @Column({
    type: 'varchar'
  })
  product_uom_qty: string;

  /**
   * Tax
   */
  @Column({
    type: 'varchar'
  })
  price_tax: string;

  /**
   * Technical Price Unit
   */
  @Column({
    type: 'varchar'
  })
  technical_price_unit: string;

  /**
   * Orderpoint
   */
  @Column({
    type: 'int'
  })
  orderpoint_id: number;

  // @ManyToOne(() => Orderpoint)
  // @JoinColumn({ name: 'orderpoint_id' })
  // orderpoint: Orderpoint;

  /**
   * Location from procurement
   */
  @Column({
    type: 'int'
  })
  location_final_id: number;

  // @ManyToOne(() => LocationFinal)
  // @JoinColumn({ name: 'location_final_id' })
  // location_final: LocationFinal;

  /**
   * Custom Description
   */
  @Column({
    type: 'varchar'
  })
  product_description_variants: string;

  /**
   * Propagate cancellation
   */
  @Column({
    type: 'boolean'
  })
  propagate_cancel: boolean;

  /**
   * Origin Sale Item
   */
  @Column({
    type: 'int'
  })
  sale_line_id: number;

  // @ManyToOne(() => SaleLine)
  // @JoinColumn({ name: 'sale_line_id' })
  // sale_line: SaleLine;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}