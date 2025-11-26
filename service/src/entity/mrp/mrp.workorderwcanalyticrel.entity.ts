import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mrp_workorder AND account_analytic_line
 */
@Entity('mrp_workorder_wc_analytic_rel')
export class MrpWorkorderWcAnalyticRel {
  @Column({
    type: 'int'
  })
  mrp_workorder_id: number;

  // @ManyToOne(() => MrpWorkorder)
  // @JoinColumn({ name: 'mrp_workorder_id' })
  // mrp_workorder: MrpWorkorder;

  @Column({
    type: 'int'
  })
  account_analytic_line_id: number;

  // @ManyToOne(() => AccountAnalyticLine)
  // @JoinColumn({ name: 'account_analytic_line_id' })
  // account_analytic_line: AccountAnalyticLine;

}