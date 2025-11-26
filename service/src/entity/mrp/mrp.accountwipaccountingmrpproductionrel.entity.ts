import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mrp_account_wip_accounting AND mrp_production
 */
@Entity('mrp_account_wip_accounting_mrp_production_rel')
export class MrpAccountWipAccountingMrpProductionRel {
  @Column({
    type: 'int'
  })
  mrp_account_wip_accounting_id: number;

  // @ManyToOne(() => MrpAccountWipAccounting)
  // @JoinColumn({ name: 'mrp_account_wip_accounting_id' })
  // mrp_account_wip_accounting: MrpAccountWipAccounting;

  @Column({
    type: 'int'
  })
  mrp_production_id: number;

  // @ManyToOne(() => MrpProduction)
  // @JoinColumn({ name: 'mrp_production_id' })
  // mrp_production: MrpProduction;

}