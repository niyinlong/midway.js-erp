import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Accounting Report
 */
@Entity('account_report')
export class AccountReport {
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
   * Root Report
   */
  @Column({
    type: 'int'
  })
  root_report_id: number;

  // @ManyToOne(() => RootReport)
  // @JoinColumn({ name: 'root_report_id' })
  // root_report: RootReport;

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
   * Load More Limit
   */
  @Column({
    type: 'int'
  })
  load_more_limit: number;

  /**
   * Prefix Groups Threshold
   */
  @Column({
    type: 'int'
  })
  prefix_groups_threshold: number;

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
   * Chart of Accounts
   */
  @Column({
    type: 'varchar'
  })
  chart_template: string;

  /**
   * Availability
   */
  @Column({
    type: 'varchar'
  })
  availability_condition: string;

  /**
   * Integer Rounding
   */
  @Column({
    type: 'varchar'
  })
  integer_rounding: string;

  /**
   * Default Opening
   */
  @Column({
    type: 'varchar'
  })
  default_opening_date_filter: string;

  /**
   * Currency Translation
   */
  @Column({
    type: 'varchar'
  })
  currency_translation: string;

  /**
   * Multi-Company
   */
  @Column({
    type: 'varchar'
  })
  filter_multi_company: string;

  /**
   * Hide lines at 0
   */
  @Column({
    type: 'varchar'
  })
  filter_hide_0_lines: string;

  /**
   * Account Groups
   */
  @Column({
    type: 'varchar'
  })
  filter_hierarchy: string;

  /**
   * Account Types
   */
  @Column({
    type: 'varchar'
  })
  filter_account_type: string;

  /**
   * Name
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
   * Composite Report
   */
  @Column({
    type: 'boolean'
  })
  use_sections: boolean;

  /**
   * Only Tax Exigible Lines
   */
  @Column({
    type: 'boolean'
  })
  only_tax_exigible: boolean;

  /**
   * Search Bar
   */
  @Column({
    type: 'boolean'
  })
  search_bar: boolean;

  /**
   * Allow Foreign VAT
   */
  @Column({
    type: 'boolean'
  })
  allow_foreign_vat: boolean;

  /**
   * Date Range
   */
  @Column({
    type: 'boolean'
  })
  filter_date_range: boolean;

  /**
   * Draft Entries
   */
  @Column({
    type: 'boolean'
  })
  filter_show_draft: boolean;

  /**
   * Unreconciled Entries
   */
  @Column({
    type: 'boolean'
  })
  filter_unreconciled: boolean;

  /**
   * Unfold All
   */
  @Column({
    type: 'boolean'
  })
  filter_unfold_all: boolean;

  /**
   * Period Comparison
   */
  @Column({
    type: 'boolean'
  })
  filter_period_comparison: boolean;

  /**
   * Growth Comparison
   */
  @Column({
    type: 'boolean'
  })
  filter_growth_comparison: boolean;

  /**
   * Journals
   */
  @Column({
    type: 'boolean'
  })
  filter_journals: boolean;

  /**
   * Analytic Filter
   */
  @Column({
    type: 'boolean'
  })
  filter_analytic: boolean;

  /**
   * Partners
   */
  @Column({
    type: 'boolean'
  })
  filter_partner: boolean;

  /**
   * Favorite Filters
   */
  @Column({
    type: 'boolean'
  })
  filter_aml_ir_filters: boolean;

  /**
   * Budgets
   */
  @Column({
    type: 'boolean'
  })
  filter_budgets: boolean;

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