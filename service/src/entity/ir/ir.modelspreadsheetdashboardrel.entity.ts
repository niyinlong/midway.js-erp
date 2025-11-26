import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN spreadsheet_dashboard AND ir_model
 */
@Entity('ir_model_spreadsheet_dashboard_rel')
export class IrModelSpreadsheetDashboardRel {
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
  ir_model_id: number;

  // @ManyToOne(() => IrModel)
  // @JoinColumn({ name: 'ir_model_id' })
  // ir_model: IrModel;

}