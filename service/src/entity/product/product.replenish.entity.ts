import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Product Replenish
 */
@Entity('product_replenish')
export class ProductReplenish {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Preferred Route
   */
  @Column({
    type: 'int'
  })
  route_id: number;

  // @ManyToOne(() => Route)
  // @JoinColumn({ name: 'route_id' })
  // route: Route;

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
   * Product Template
   */
  @Column({
    type: 'int'
  })
  product_tmpl_id: number;

  // @ManyToOne(() => ProductTmpl)
  // @JoinColumn({ name: 'product_tmpl_id' })
  // product_tmpl: ProductTmpl;

  /**
   * Unity of measure
   */
  @Column({
    type: 'int'
  })
  product_uom_id: number;

  // @ManyToOne(() => ProductUom)
  // @JoinColumn({ name: 'product_uom_id' })
  // product_uom: ProductUom;

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
   * Has variants
   */
  @Column({
    type: 'boolean'
  })
  product_has_variants: boolean;

  /**
   * Scheduled Date
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
   * Quantity
   */
  @Column({
    type: 'varchar'
  })
  quantity: string;

  /**
   * Bill of Material
   */
  @Column({
    type: 'int'
  })
  bom_id: number;

  // @ManyToOne(() => Bom)
  // @JoinColumn({ name: 'bom_id' })
  // bom: Bom;

  /**
   * Vendor
   */
  @Column({
    type: 'int'
  })
  supplier_id: number;

  // @ManyToOne(() => Supplier)
  // @JoinColumn({ name: 'supplier_id' })
  // supplier: Supplier;

}