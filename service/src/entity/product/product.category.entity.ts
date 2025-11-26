import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Product Category
 */
@Entity('product_category')
export class ProductCategory {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Parent Category
   */
  @Column({
    type: 'int'
  })
  parent_id: number;

  // @ManyToOne(() => Parent)
  // @JoinColumn({ name: 'parent_id' })
  // parent: Parent;

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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Complete Name
   */
  @Column({
    type: 'varchar'
  })
  complete_name: string;

  /**
   * Parent Path
   */
  @Column({
    type: 'varchar'
  })
  parent_path: string;

  /**
   * Product Properties
   */
  @Column({
    type: 'jsonb'
  })
  product_properties_definition: object;

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
  property_account_income_categ_id: object;

  // @ManyToOne(() => PropertyAccountIncomeCateg)
  // @JoinColumn({ name: 'property_account_income_categ_id' })
  // property_account_income_categ: PropertyAccountIncomeCateg;

  /**
   * Expense Account
   */
  @Column({
    type: 'jsonb'
  })
  property_account_expense_categ_id: object;

  // @ManyToOne(() => PropertyAccountExpenseCateg)
  // @JoinColumn({ name: 'property_account_expense_categ_id' })
  // property_account_expense_categ: PropertyAccountExpenseCateg;

  /**
   * Force Removal Strategy
   */
  @Column({
    type: 'int'
  })
  removal_strategy_id: number;

  // @ManyToOne(() => RemovalStrategy)
  // @JoinColumn({ name: 'removal_strategy_id' })
  // removal_strategy: RemovalStrategy;

  /**
   * Reserve Packagings
   */
  @Column({
    type: 'varchar'
  })
  packaging_reserve_method: string;

  /**
   * Inventory Valuation
   */
  @Column({
    type: 'jsonb'
  })
  property_valuation: object;

  /**
   * Costing Method
   */
  @Column({
    type: 'jsonb'
  })
  property_cost_method: object;

  /**
   * Stock Journal
   */
  @Column({
    type: 'jsonb'
  })
  property_stock_journal: object;

  /**
   * Stock Valuation Account
   */
  @Column({
    type: 'jsonb'
  })
  property_stock_valuation_account_id: object;

  // @ManyToOne(() => PropertyStockValuationAccount)
  // @JoinColumn({ name: 'property_stock_valuation_account_id' })
  // property_stock_valuation_account: PropertyStockValuationAccount;

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
   * Production Account
   */
  @Column({
    type: 'jsonb'
  })
  property_stock_account_production_cost_id: object;

  // @ManyToOne(() => PropertyStockAccountProductionCost)
  // @JoinColumn({ name: 'property_stock_account_production_cost_id' })
  // property_stock_account_production_cost: PropertyStockAccountProductionCost;

}