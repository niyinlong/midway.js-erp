import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Analytic Plan''s Applicabilities
 */
@Entity('account_analytic_applicability')
export class AccountAnalyticApplicability {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Analytic Plan
   */
  @Column({
    type: 'int'
  })
  analytic_plan_id: number;

  // @ManyToOne(() => AnalyticPlan)
  // @JoinColumn({ name: 'analytic_plan_id' })
  // analytic_plan: AnalyticPlan;

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
   * Domain
   */
  @Column({
    type: 'varchar'
  })
  business_domain: string;

  /**
   * Applicability
   */
  @Column({
    type: 'varchar'
  })
  applicability: string;

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
   * Financial Accounts Prefixes
   */
  @Column({
    type: 'varchar'
  })
  account_prefix: string;

}