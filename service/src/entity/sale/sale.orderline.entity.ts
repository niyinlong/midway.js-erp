import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Sales Order Line
 */
@Entity('sale_order_line')
export class SaleOrderLine {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Currency
   */
  @Column({
    type: 'int'
  })
  currency_id: number;

  // @ManyToOne(() => Currency)
  // @JoinColumn({ name: 'currency_id' })
  // currency: Currency;

  /**
   * Customer
   */
  @Column({
    type: 'int'
  })
  order_partner_id: number;

  // @ManyToOne(() => OrderPartner)
  // @JoinColumn({ name: 'order_partner_id' })
  // order_partner: OrderPartner;

  /**
   * Salesperson
   */
  @Column({
    type: 'int'
  })
  salesman_id: number;

  // @ManyToOne(() => Salesman)
  // @JoinColumn({ name: 'salesman_id' })
  // salesman: Salesman;

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
   * Linked Order Line
   */
  @Column({
    type: 'int'
  })
  linked_line_id: number;

  // @ManyToOne(() => LinkedLine)
  // @JoinColumn({ name: 'linked_line_id' })
  // linked_line: LinkedLine;

  /**
   * Combo Item
   */
  @Column({
    type: 'int'
  })
  combo_item_id: number;

  // @ManyToOne(() => ComboItem)
  // @JoinColumn({ name: 'combo_item_id' })
  // combo_item: ComboItem;

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
   * Order Status
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Display Type
   */
  @Column({
    type: 'varchar'
  })
  display_type: string;

  /**
   * Virtual
   */
  @Column({
    type: 'varchar'
  })
  virtual_id: string;

  // @ManyToOne(() => Virtual)
  // @JoinColumn({ name: 'virtual_id' })
  // virtual: Virtual;

  /**
   * Linked Virtual
   */
  @Column({
    type: 'varchar'
  })
  linked_virtual_id: string;

  // @ManyToOne(() => LinkedVirtual)
  // @JoinColumn({ name: 'linked_virtual_id' })
  // linked_virtual: LinkedVirtual;

  /**
   * Method to update delivered qty
   */
  @Column({
    type: 'varchar'
  })
  qty_delivered_method: string;

  /**
   * Invoice Status
   */
  @Column({
    type: 'varchar'
  })
  invoice_status: string;

  /**
   * Analytic Distribution
   */
  @Column({
    type: 'jsonb'
  })
  analytic_distribution: object;

  /**
   * Extra Tax Data
   */
  @Column({
    type: 'jsonb'
  })
  extra_tax_data: object;

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
  product_uom_qty: number;

  /**
   * Unit Price
   */
  @Column({
    type: 'int'
  })
  price_unit: number;

  /**
   * Discount (%)
   */
  @Column({
    type: 'int'
  })
  discount: number;

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
   * Price Reduce Tax excl
   */
  @Column({
    type: 'int'
  })
  price_reduce_taxexcl: number;

  /**
   * Price Reduce Tax incl
   */
  @Column({
    type: 'int'
  })
  price_reduce_taxinc: number;

  /**
   * Delivery Quantity
   */
  @Column({
    type: 'int'
  })
  qty_delivered: number;

  /**
   * Invoiced Quantity
   */
  @Column({
    type: 'int'
  })
  qty_invoiced: number;

  /**
   * Quantity To Invoice
   */
  @Column({
    type: 'int'
  })
  qty_to_invoice: number;

  /**
   * Untaxed Invoiced Amount
   */
  @Column({
    type: 'int'
  })
  untaxed_amount_invoiced: number;

  /**
   * Untaxed Amount To Invoice
   */
  @Column({
    type: 'int'
  })
  untaxed_amount_to_invoice: number;

  /**
   * Is a down payment
   */
  @Column({
    type: 'boolean'
  })
  is_downpayment: boolean;

  /**
   * Is expense
   */
  @Column({
    type: 'boolean'
  })
  is_expense: boolean;

  /**
   * Collapse Prices
   */
  @Column({
    type: 'boolean'
  })
  collapse_prices: boolean;

  /**
   * Collapse Composition
   */
  @Column({
    type: 'boolean'
  })
  collapse_composition: boolean;

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
   * Technical Price Unit
   */
  @Column({
    type: 'varchar'
  })
  technical_price_unit: string;

  /**
   * Total Tax
   */
  @Column({
    type: 'varchar'
  })
  price_tax: string;

  /**
   * Lead Time
   */
  @Column({
    type: 'varchar'
  })
  customer_lead: string;

  /**
   * Optional Line
   */
  @Column({
    type: 'boolean'
  })
  is_optional: boolean;

  /**
   * Warehouse
   */
  @Column({
    type: 'int'
  })
  warehouse_id: number;

  // @ManyToOne(() => Warehouse)
  // @JoinColumn({ name: 'warehouse_id' })
  // warehouse: Warehouse;

  @Column({
    type: 'boolean'
  })
  is_service: boolean;

  /**
   * Generated Project
   */
  @Column({
    type: 'int'
  })
  project_id: number;

  // @ManyToOne(() => Project)
  // @JoinColumn({ name: 'project_id' })
  // project: Project;

  /**
   * Generated Task
   */
  @Column({
    type: 'int'
  })
  task_id: number;

  // @ManyToOne(() => Task)
  // @JoinColumn({ name: 'task_id' })
  // task: Task;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}