import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN spreadsheet_dashboard AND res_users
 */
@Entity('res_users_spreadsheet_dashboard_rel')
export class ResUsersSpreadsheetDashboardRel {
  @Column({
    type: 'int'
  })
  spreadsheet_dashboard_id: number;

  // @ManyToOne(() => SpreadsheetDashboard)
  // @JoinColumn({ name: 'spreadsheet_dashboard_id' })
  // spreadsheet_dashboard: SpreadsheetDashboard;

  @Column({
    type: 'int'
  })
  res_users_id: number;

  // @ManyToOne(() => ResUsers)
  // @JoinColumn({ name: 'res_users_id' })
  // res_users: ResUsers;

}