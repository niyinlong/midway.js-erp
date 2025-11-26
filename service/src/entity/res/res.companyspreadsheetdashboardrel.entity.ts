import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN spreadsheet_dashboard AND res_company
 */
@Entity('res_company_spreadsheet_dashboard_rel')
export class ResCompanySpreadsheetDashboardRel {
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
  res_company_id: number;

  // @ManyToOne(() => ResCompany)
  // @JoinColumn({ name: 'res_company_id' })
  // res_company: ResCompany;

}