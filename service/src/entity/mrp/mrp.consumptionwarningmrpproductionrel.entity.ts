import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mrp_consumption_warning AND mrp_production
 */
@Entity('mrp_consumption_warning_mrp_production_rel')
export class MrpConsumptionWarningMrpProductionRel {
  @Column({
    type: 'int'
  })
  mrp_consumption_warning_id: number;

  // @ManyToOne(() => MrpConsumptionWarning)
  // @JoinColumn({ name: 'mrp_consumption_warning_id' })
  // mrp_consumption_warning: MrpConsumptionWarning;

  @Column({
    type: 'int'
  })
  mrp_production_id: number;

  // @ManyToOne(() => MrpProduction)
  // @JoinColumn({ name: 'mrp_production_id' })
  // mrp_production: MrpProduction;

}