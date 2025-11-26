import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Inventory Routes
 */
@Entity('stock_route')
export class StockRoute {
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
   * Supplied Warehouse
   */
  @Column({
    type: 'int'
  })
  supplied_wh_id: number;

  // @ManyToOne(() => SuppliedWh)
  // @JoinColumn({ name: 'supplied_wh_id' })
  // supplied_wh: SuppliedWh;

  /**
   * Supplying Warehouse
   */
  @Column({
    type: 'int'
  })
  supplier_wh_id: number;

  // @ManyToOne(() => SupplierWh)
  // @JoinColumn({ name: 'supplier_wh_id' })
  // supplier_wh: SupplierWh;

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
   * Route
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Applicable on Product
   */
  @Column({
    type: 'boolean'
  })
  product_selectable: boolean;

  /**
   * Applicable on Product Category
   */
  @Column({
    type: 'boolean'
  })
  product_categ_selectable: boolean;

  /**
   * Applicable on Warehouse
   */
  @Column({
    type: 'boolean'
  })
  warehouse_selectable: boolean;

  /**
   * Applicable on Package Type
   */
  @Column({
    type: 'boolean'
  })
  package_type_selectable: boolean;

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
   * Selectable on Sales Order Line
   */
  @Column({
    type: 'boolean'
  })
  sale_selectable: boolean;

}