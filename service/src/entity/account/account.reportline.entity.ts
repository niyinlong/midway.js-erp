import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Accounting Report Line
 */
@Entity('account_report_line')
export class AccountReportLine {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Parent Report
   */
  @Column({
    type: 'int'
  })
  report_id: number;

  // @ManyToOne(() => Report)
  // @JoinColumn({ name: 'report_id' })
  // report: Report;

  /**
   * Level
   */
  @Column({
    type: 'int'
  })
  hierarchy_level: number;

  /**
   * Parent Line
   */
  @Column({
    type: 'int'
  })
  parent_id: number;

  // @ManyToOne(() => Parent)
  // @JoinColumn({ name: 'parent_id' })
  // parent: Parent;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Action
   */
  @Column({
    type: 'int'
  })
  action_id: number;

  // @ManyToOne(() => Action)
  // @JoinColumn({ name: 'action_id' })
  // action: Action;

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
   * Group By
   */
  @Column({
    type: 'varchar'
  })
  groupby: string;

  /**
   * User Group By
   */
  @Column({
    type: 'varchar'
  })
  user_groupby: string;

  /**
   * Code
   */
  @Column({
    type: 'varchar'
  })
  code: string;

  /**
   * Horizontal Split Side
   */
  @Column({
    type: 'varchar'
  })
  horizontal_split_side: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Foldable
   */
  @Column({
    type: 'boolean'
  })
  foldable: boolean;

  /**
   * Print On New Page
   */
  @Column({
    type: 'boolean'
  })
  print_on_new_page: boolean;

  /**
   * Hide if Zero
   */
  @Column({
    type: 'boolean'
  })
  hide_if_zero: boolean;

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