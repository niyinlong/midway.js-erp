import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Product
 */
@Entity('product_template')
export class ProductTemplate {
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
   * Product Category
   */
  @Column({
    type: 'int'
  })
  categ_id: number;

  // @ManyToOne(() => Categ)
  // @JoinColumn({ name: 'categ_id' })
  // categ: Categ;

  /**
   * Unit
   */
  @Column({
    type: 'int'
  })
  uom_id: number;

  // @ManyToOne(() => Uom)
  // @JoinColumn({ name: 'uom_id' })
  // uom: Uom;

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
   * Color Index
   */
  @Column({
    type: 'int'
  })
  color: number;

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
   * Product Type
   */
  @Column({
    type: 'varchar'
  })
  type: string;

  /**
   * Create on Order
   */
  @Column({
    type: 'varchar'
  })
  service_tracking: string;

  /**
   * Internal Reference
   */
  @Column({
    type: 'varchar'
  })
  default_code: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Description
   */
  @Column({
    type: 'jsonb'
  })
  description: object;

  /**
   * Purchase Description
   */
  @Column({
    type: 'jsonb'
  })
  description_purchase: object;

  /**
   * Sales Description
   */
  @Column({
    type: 'jsonb'
  })
  description_sale: object;

  /**
   * Properties
   */
  @Column({
    type: 'jsonb'
  })
  product_properties: object;

  /**
   * Sales Price
   */
  @Column({
    type: 'int'
  })
  list_price: number;

  /**
   * Volume
   */
  @Column({
    type: 'int'
  })
  volume: number;

  /**
   * Weight
   */
  @Column({
    type: 'int'
  })
  weight: number;

  /**
   * Sales
   */
  @Column({
    type: 'boolean'
  })
  sale_ok: boolean;

  /**
   * Purchase
   */
  @Column({
    type: 'boolean'
  })
  purchase_ok: boolean;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Can Image 1024 be zoomed
   */
  @Column({
    type: 'boolean'
  })
  can_image_1024_be_zoomed: boolean;

  /**
   * Is a configurable product
   */
  @Column({
    type: 'boolean'
  })
  has_configurable_attributes: boolean;

  /**
   * Favorite
   */
  @Column({
    type: 'boolean'
  })
  is_favorite: boolean;

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
   * Income Account
   */
  @Column({
    type: 'jsonb'
  })
  property_account_income_id: object;

  // @ManyToOne(() => PropertyAccountIncome)
  // @JoinColumn({ name: 'property_account_income_id' })
  // property_account_income: PropertyAccountIncome;

  /**
   * Expense Account
   */
  @Column({
    type: 'jsonb'
  })
  property_account_expense_id: object;

  // @ManyToOne(() => PropertyAccountExpense)
  // @JoinColumn({ name: 'property_account_expense_id' })
  // property_account_expense: PropertyAccountExpense;

  /**
   * Track Service
   */
  @Column({
    type: 'varchar'
  })
  service_type: string;

  /**
   * Re-Invoice Costs
   */
  @Column({
    type: 'varchar'
  })
  expense_policy: string;

  /**
   * Invoicing Policy
   */
  @Column({
    type: 'varchar'
  })
  invoice_policy: string;

  /**
   * Sales Order Line Warning
   */
  @Column({
    type: 'varchar'
  })
  sale_line_warn_msg: string;

  /**
   * Customer Lead Time
   */
  @Column({
    type: 'int'
  })
  sale_delay: number;

  /**
   * Serial/Lot Numbers Sequence
   */
  @Column({
    type: 'int'
  })
  lot_sequence_id: number;

  // @ManyToOne(() => LotSequence)
  // @JoinColumn({ name: 'lot_sequence_id' })
  // lot_sequence: LotSequence;

  /**
   * Tracking
   */
  @Column({
    type: 'varchar'
  })
  tracking: string;

  /**
   * Responsible
   */
  @Column({
    type: 'jsonb'
  })
  responsible_id: object;

  // @ManyToOne(() => Responsible)
  // @JoinColumn({ name: 'responsible_id' })
  // responsible: Responsible;

  /**
   * Production Location
   */
  @Column({
    type: 'jsonb'
  })
  property_stock_production: object;

  /**
   * Inventory Location
   */
  @Column({
    type: 'jsonb'
  })
  property_stock_inventory: object;

  /**
   * Description on Picking
   */
  @Column({
    type: 'jsonb'
  })
  description_picking: object;

  /**
   * Description on Delivery Orders
   */
  @Column({
    type: 'jsonb'
  })
  description_pickingout: object;

  /**
   * Description on Receptions
   */
  @Column({
    type: 'jsonb'
  })
  description_pickingin: object;

  /**
   * Track Inventory
   */
  @Column({
    type: 'boolean'
  })
  is_storable: boolean;

  /**
   * Price Difference Account
   */
  @Column({
    type: 'jsonb'
  })
  property_price_difference_account_id: object;

  // @ManyToOne(() => PropertyPriceDifferenceAccount)
  // @JoinColumn({ name: 'property_price_difference_account_id' })
  // property_price_difference_account: PropertyPriceDifferenceAccount;

  /**
   * Valuation by Lot/Serial
   */
  @Column({
    type: 'boolean'
  })
  lot_valuated: boolean;

  /**
   * Project
   */
  @Column({
    type: 'jsonb'
  })
  project_id: object;

  // @ManyToOne(() => Project)
  // @JoinColumn({ name: 'project_id' })
  // project: Project;

  /**
   * Project Template
   */
  @Column({
    type: 'jsonb'
  })
  project_template_id: object;

  // @ManyToOne(() => ProjectTemplate)
  // @JoinColumn({ name: 'project_template_id' })
  // project_template: ProjectTemplate;

  /**
   * Task Template
   */
  @Column({
    type: 'jsonb'
  })
  task_template_id: object;

  // @ManyToOne(() => TaskTemplate)
  // @JoinColumn({ name: 'task_template_id' })
  // task_template: TaskTemplate;

  /**
   * Control Policy
   */
  @Column({
    type: 'varchar'
  })
  purchase_method: string;

  /**
   * Message for Purchase Order Line
   */
  @Column({
    type: 'varchar'
  })
  purchase_line_warn_msg: string;

  /**
   * Subcontract Service
   */
  @Column({
    type: 'jsonb'
  })
  service_to_purchase: object;

}