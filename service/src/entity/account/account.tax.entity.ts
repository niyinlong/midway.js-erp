import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Tax
 */
@Entity('account_tax')
export class AccountTax {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Tax Group
   */
  @Column({
    type: 'int'
  })
  tax_group_id: number;

  // @ManyToOne(() => TaxGroup)
  // @JoinColumn({ name: 'tax_group_id' })
  // tax_group: TaxGroup;

  /**
   * Cash Basis Transition Account
   */
  @Column({
    type: 'int'
  })
  cash_basis_transition_account_id: number;

  // @ManyToOne(() => CashBasisTransitionAccount)
  // @JoinColumn({ name: 'cash_basis_transition_account_id' })
  // cash_basis_transition_account: CashBasisTransitionAccount;

  /**
   * Country
   */
  @Column({
    type: 'int'
  })
  country_id: number;

  // @ManyToOne(() => Country)
  // @JoinColumn({ name: 'country_id' })
  // country: Country;

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
   * Tax Type
   */
  @Column({
    type: 'varchar'
  })
  type_tax_use: string;

  /**
   * Tax Scope
   */
  @Column({
    type: 'varchar'
  })
  tax_scope: string;

  /**
   * Tax Computation
   */
  @Column({
    type: 'varchar'
  })
  amount_type: string;

  /**
   * Included in Price
   */
  @Column({
    type: 'varchar'
  })
  price_include_override: string;

  /**
   * Tax Exigibility
   */
  @Column({
    type: 'varchar'
  })
  tax_exigibility: string;

  /**
   * Tax Name
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
   * Label on Invoices
   */
  @Column({
    type: 'jsonb'
  })
  invoice_label: object;

  /**
   * Legal Notes
   */
  @Column({
    type: 'jsonb'
  })
  invoice_legal_notes: object;

  /**
   * Amount
   */
  @Column({
    type: 'int'
  })
  amount: number;

  /**
   * Is Domestic
   */
  @Column({
    type: 'boolean'
  })
  is_domestic: boolean;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Affect Base of Subsequent Taxes
   */
  @Column({
    type: 'boolean'
  })
  include_base_amount: boolean;

  /**
   * Base Affected by Previous Taxes
   */
  @Column({
    type: 'boolean'
  })
  is_base_affected: boolean;

  /**
   * Include in Analytic Cost
   */
  @Column({
    type: 'boolean'
  })
  analytic: boolean;

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
   * Tax Category Code
   */
  @Column({
    type: 'varchar'
  })
  ubl_cii_tax_category_code: string;

  /**
   * Tax Exemption Reason Code
   */
  @Column({
    type: 'varchar'
  })
  ubl_cii_tax_exemption_reason_code: string;

}