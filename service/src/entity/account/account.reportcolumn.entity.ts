import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Accounting Report Column
 */
@Entity('account_report_column')
export class AccountReportColumn {
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
   * Report
   */
  @Column({
    type: 'int'
  })
  report_id: number;

  // @ManyToOne(() => Report)
  // @JoinColumn({ name: 'report_id' })
  // report: Report;

  /**
   * Custom Audit Action
   */
  @Column({
    type: 'int'
  })
  custom_audit_action_id: number;

  // @ManyToOne(() => CustomAuditAction)
  // @JoinColumn({ name: 'custom_audit_action_id' })
  // custom_audit_action: CustomAuditAction;

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
   * Expression Label
   */
  @Column({
    type: 'varchar'
  })
  expression_label: string;

  /**
   * Figure Type
   */
  @Column({
    type: 'varchar'
  })
  figure_type: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Sortable
   */
  @Column({
    type: 'boolean'
  })
  sortable: boolean;

  /**
   * Blank if Zero
   */
  @Column({
    type: 'boolean'
  })
  blank_if_zero: boolean;

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