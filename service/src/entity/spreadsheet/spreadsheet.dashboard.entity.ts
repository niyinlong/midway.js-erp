import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Spreadsheet Dashboard
 */
@Entity('spreadsheet_dashboard')
export class SpreadsheetDashboard {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Dashboard Group
   */
  @Column({
    type: 'int'
  })
  dashboard_group_id: number;

  // @ManyToOne(() => DashboardGroup)
  // @JoinColumn({ name: 'dashboard_group_id' })
  // dashboard_group: DashboardGroup;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Sample Dashboard File Path
   */
  @Column({
    type: 'varchar'
  })
  sample_dashboard_file_path: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Is Published
   */
  @Column({
    type: 'boolean'
  })
  is_published: boolean;

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