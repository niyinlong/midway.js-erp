import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_analytic_account AND mrp_bom
 */
@Entity('account_analytic_account_mrp_bom_rel')
export class AccountAnalyticAccountMrpBomRel {
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
  mrp_bom_id: number;

  // @ManyToOne(() => MrpBom)
  // @JoinColumn({ name: 'mrp_bom_id' })
  // mrp_bom: MrpBom;

}