import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Supplier Pricelist
 */
@Entity('product_supplierinfo')
export class ProductSupplierinfo {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Vendor
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

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
   * Lead Time
   */
  @Column({
    type: 'int'
  })
  delay: number;

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
   * Vendor Product Name
   */
  @Column({
    type: 'varchar'
  })
  product_name: string;

  /**
   * Vendor Product Code
   */
  @Column({
    type: 'varchar'
  })
  product_code: string;

  /**
   * Start Date
   */
  @Column({
    type: 'datetime'
  })
  date_start: Date;

  /**
   * End Date
   */
  @Column({
    type: 'datetime'
  })
  date_end: Date;

  /**
   * Quantity
   */
  @Column({
    type: 'int'
  })
  min_qty: number;

  /**
   * Unit Price
   */
  @Column({
    type: 'int'
  })
  price: number;

  /**
   * Discount (%)
   */
  @Column({
    type: 'int'
  })
  discount: number;

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

}