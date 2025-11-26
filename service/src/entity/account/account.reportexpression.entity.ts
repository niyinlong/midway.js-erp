import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Accounting Report Expression
 */
@Entity('account_report_expression')
export class AccountReportExpression {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Report Line
   */
  @Column({
    type: 'int'
  })
  report_line_id: number;

  // @ManyToOne(() => ReportLine)
  // @JoinColumn({ name: 'report_line_id' })
  // report_line: ReportLine;

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
   * Label
   */
  @Column({
    type: 'varchar'
  })
  label: string;

  /**
   * Computation Engine
   */
  @Column({
    type: 'varchar'
  })
  engine: string;

  /**
   * Formula
   */
  @Column({
    type: 'varchar'
  })
  formula: string;

  /**
   * Subformula
   */
  @Column({
    type: 'varchar'
  })
  subformula: string;

  /**
   * Date Scope
   */
  @Column({
    type: 'varchar'
  })
  date_scope: string;

  /**
   * Figure Type
   */
  @Column({
    type: 'varchar'
  })
  figure_type: string;

  /**
   * Carry Over To
   */
  @Column({
    type: 'varchar'
  })
  carryover_target: string;

  /**
   * Is Growth Good when Positive
   */
  @Column({
    type: 'boolean'
  })
  green_on_positive: boolean;

  /**
   * Blank if Zero
   */
  @Column({
    type: 'boolean'
  })
  blank_if_zero: boolean;

  /**
   * Auditable
   */
  @Column({
    type: 'boolean'
  })
  auditable: boolean;

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

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}