import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Copy of a shared dashboard
 */
@Entity('spreadsheet_dashboard_share')
export class SpreadsheetDashboardShare {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Dashboard
   */
  @Column({
    type: 'int'
  })
  dashboard_id: number;

  // @ManyToOne(() => Dashboard)
  // @JoinColumn({ name: 'dashboard_id' })
  // dashboard: Dashboard;

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
   * Access Token
   */
  @Column({
    type: 'varchar'
  })
  access_token: string;

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