import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_analytic_account AND mrp_production
 */
@Entity('account_analytic_account_mrp_production_rel')
export class AccountAnalyticAccountMrpProductionRel {
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
  mrp_production_id: number;

  // @ManyToOne(() => MrpProduction)
  // @JoinColumn({ name: 'mrp_production_id' })
  // mrp_production: MrpProduction;

}