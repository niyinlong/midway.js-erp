import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Bill of Material
 */
@Entity('mrp_bom')
export class MrpBom {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Product
   */
  @Column({
    type: 'int'
  })
  product_tmpl_id: number;

  // @ManyToOne(() => ProductTmpl)
  // @JoinColumn({ name: 'product_tmpl_id' })
  // product_tmpl: ProductTmpl;

  /**
   * Product Variant
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
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Operation Type
   */
  @Column({
    type: 'int'
  })
  picking_type_id: number;

  // @ManyToOne(() => PickingType)
  // @JoinColumn({ name: 'picking_type_id' })
  // picking_type: PickingType;

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
   * Manufacturing Lead Time
   */
  @Column({
    type: 'int'
  })
  produce_delay: number;

  /**
   * Days to prepare Manufacturing Order
   */
  @Column({
    type: 'int'
  })
  days_to_prepare_mo: number;

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
   * Reference
   */
  @Column({
    type: 'varchar'
  })
  code: string;

  /**
   * BoM Type
   */
  @Column({
    type: 'varchar'
  })
  type: string;

  /**
   * Manufacturing Readiness
   */
  @Column({
    type: 'varchar'
  })
  ready_to_produce: string;

  /**
   * Flexible Consumption
   */
  @Column({
    type: 'varchar'
  })
  consumption: string;

  /**
   * Quantity
   */
  @Column({
    type: 'int'
  })
  product_qty: number;

  /**
   * Batch Size
   */
  @Column({
    type: 'int'
  })
  batch_size: number;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Operation Dependencies
   */
  @Column({
    type: 'boolean'
  })
  allow_operation_dependencies: boolean;

  /**
   * Enable Batch Size
   */
  @Column({
    type: 'boolean'
  })
  enable_batch_size: boolean;

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
   * Project
   */
  @Column({
    type: 'int'
  })
  project_id: number;

  // @ManyToOne(() => Project)
  // @JoinColumn({ name: 'project_id' })
  // project: Project;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}