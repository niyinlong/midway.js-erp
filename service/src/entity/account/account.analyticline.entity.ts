import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Analytic Line
 */
@Entity('account_analytic_line')
export class AccountAnalyticLine {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Project Account
   */
  @Column({
    type: 'int'
  })
  account_id: number;

  // @ManyToOne(() => Account)
  // @JoinColumn({ name: 'account_id' })
  // account: Account;

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
   * User
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

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
   * Description
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Category
   */
  @Column({
    type: 'varchar'
  })
  category: string;

  /**
   * Date
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

  /**
   * Amount
   */
  @Column({
    type: 'int'
  })
  amount: number;

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
  unit_amount: string;

  /**
   * Departments
   */
  @Column({
    type: 'int'
  })
  x_plan2_id: number;

  // @ManyToOne(() => XPlan2)
  // @JoinColumn({ name: 'x_plan2_id' })
  // x_plan2: XPlan2;

  /**
   * Internal
   */
  @Column({
    type: 'int'
  })
  x_plan3_id: number;

  // @ManyToOne(() => XPlan3)
  // @JoinColumn({ name: 'x_plan3_id' })
  // x_plan3: XPlan3;

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
   * Financial Account
   */
  @Column({
    type: 'int'
  })
  general_account_id: number;

  // @ManyToOne(() => GeneralAccount)
  // @JoinColumn({ name: 'general_account_id' })
  // general_account: GeneralAccount;

  /**
   * Financial Journal
   */
  @Column({
    type: 'int'
  })
  journal_id: number;

  // @ManyToOne(() => Journal)
  // @JoinColumn({ name: 'journal_id' })
  // journal: Journal;

  /**
   * Journal Item
   */
  @Column({
    type: 'int'
  })
  move_line_id: number;

  // @ManyToOne(() => MoveLine)
  // @JoinColumn({ name: 'move_line_id' })
  // move_line: MoveLine;

  /**
   * Code
   */
  @Column({
    type: 'varchar'
  })
  code: string;

  /**
   * Ref.
   */
  @Column({
    type: 'varchar'
  })
  ref: string;

  /**
   * Sales Order Item
   */
  @Column({
    type: 'int'
  })
  so_line: number;

}