import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Pricelist Rule
 */
@Entity('product_pricelist_item')
export class ProductPricelistItem {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Pricelist
   */
  @Column({
    type: 'int'
  })
  pricelist_id: number;

  // @ManyToOne(() => Pricelist)
  // @JoinColumn({ name: 'pricelist_id' })
  // pricelist: Pricelist;

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
   * Category
   */
  @Column({
    type: 'int'
  })
  categ_id: number;

  // @ManyToOne(() => Categ)
  // @JoinColumn({ name: 'categ_id' })
  // categ: Categ;

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
   * Variant
   */
  @Column({
    type: 'int'
  })
  product_id: number;

  // @ManyToOne(() => Product)
  // @JoinColumn({ name: 'product_id' })
  // product: Product;

  /**
   * Other Pricelist
   */
  @Column({
    type: 'int'
  })
  base_pricelist_id: number;

  // @ManyToOne(() => BasePricelist)
  // @JoinColumn({ name: 'base_pricelist_id' })
  // base_pricelist: BasePricelist;

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
   * Apply On
   */
  @Column({
    type: 'varchar'
  })
  applied_on: string;

  /**
   * Display Applied On
   */
  @Column({
    type: 'varchar'
  })
  display_applied_on: string;

  /**
   * Based on
   */
  @Column({
    type: 'varchar'
  })
  base: string;

  /**
   * Compute Price
   */
  @Column({
    type: 'varchar'
  })
  compute_price: string;

  /**
   * Min. Quantity
   */
  @Column({
    type: 'int'
  })
  min_quantity: number;

  /**
   * Fixed Price
   */
  @Column({
    type: 'int'
  })
  fixed_price: number;

  /**
   * Price Discount
   */
  @Column({
    type: 'int'
  })
  price_discount: number;

  /**
   * Price Rounding
   */
  @Column({
    type: 'int'
  })
  price_round: number;

  /**
   * Extra Fee
   */
  @Column({
    type: 'int'
  })
  price_surcharge: number;

  /**
   * Markup
   */
  @Column({
    type: 'int'
  })
  price_markup: number;

  /**
   * Min. Price Margin
   */
  @Column({
    type: 'int'
  })
  price_min_margin: number;

  /**
   * Max. Price Margin
   */
  @Column({
    type: 'int'
  })
  price_max_margin: number;

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
   * Percentage Price
   */
  @Column({
    type: 'varchar'
  })
  percent_price: string;

}