import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_analytic_account AND mrp_workcenter
 */
@Entity('account_analytic_account_mrp_workcenter_rel')
export class AccountAnalyticAccountMrpWorkcenterRel {
  @Column({
    type: 'int'
  })
  account_analytic_account_id: number;

  // @ManyToOne(() => AccountAnalyticAccount)
  // @JoinColumn({ name: 'account_analytic_account_id' })
  // account_analytic_account: AccountAnalyticAccount;

  @Column({
    type: 'int'
  })
  mrp_workcenter_id: number;

  // @ManyToOne(() => MrpWorkcenter)
  // @JoinColumn({ name: 'mrp_workcenter_id' })
  // mrp_workcenter: MrpWorkcenter;

}