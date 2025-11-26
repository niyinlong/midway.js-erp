import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Analytic Distribution Model
 */
@Entity('account_analytic_distribution_model')
export class AccountAnalyticDistributionModel {
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
   * Partner Category
   */
  @Column({
    type: 'int'
  })
  partner_category_id: number;

  // @ManyToOne(() => PartnerCategory)
  // @JoinColumn({ name: 'partner_category_id' })
  // partner_category: PartnerCategory;

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
   * Analytic Distribution
   */
  @Column({
    type: 'jsonb'
  })
  analytic_distribution: object;

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
   * Product Category
   */
  @Column({
    type: 'int'
  })
  product_categ_id: number;

  // @ManyToOne(() => ProductCateg)
  // @JoinColumn({ name: 'product_categ_id' })
  // product_categ: ProductCateg;

  /**
   * Accounts Prefix
   */
  @Column({
    type: 'varchar'
  })
  account_prefix: string;

}