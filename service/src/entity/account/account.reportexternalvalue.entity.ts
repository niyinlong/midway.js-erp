import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Accounting Report External Value
 */
@Entity('account_report_external_value')
export class AccountReportExternalValue {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Target Expression
   */
  @Column({
    type: 'int'
  })
  target_report_expression_id: number;

  // @ManyToOne(() => TargetReportExpression)
  // @JoinColumn({ name: 'target_report_expression_id' })
  // target_report_expression: TargetReportExpression;

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
   * Origin Line
   */
  @Column({
    type: 'int'
  })
  carryover_origin_report_line_id: number;

  // @ManyToOne(() => CarryoverOriginReportLine)
  // @JoinColumn({ name: 'carryover_origin_report_line_id' })
  // carryover_origin_report_line: CarryoverOriginReportLine;

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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Text Value
   */
  @Column({
    type: 'varchar'
  })
  text_value: string;

  /**
   * Origin Expression Label
   */
  @Column({
    type: 'varchar'
  })
  carryover_origin_expression_label: string;

  /**
   * Date
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

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
   * Numeric Value
   */
  @Column({
    type: 'varchar'
  })
  value: string;

}