import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN spreadsheet_dashboard AND res_groups
 */
@Entity('res_groups_spreadsheet_dashboard_rel')
export class ResGroupsSpreadsheetDashboardRel {
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
  res_groups_id: number;

  // @ManyToOne(() => ResGroups)
  // @JoinColumn({ name: 'res_groups_id' })
  // res_groups: ResGroups;

}