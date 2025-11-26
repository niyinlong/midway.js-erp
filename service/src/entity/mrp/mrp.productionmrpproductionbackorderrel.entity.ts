import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mrp_production_backorder AND mrp_production
 */
@Entity('mrp_production_mrp_production_backorder_rel')
export class MrpProductionMrpProductionBackorderRel {
  @Column({
    type: 'int'
  })
  mrp_production_backorder_id: number;

  // @ManyToOne(() => MrpProductionBackorder)
  // @JoinColumn({ name: 'mrp_production_backorder_id' })
  // mrp_production_backorder: MrpProductionBackorder;

  @Column({
    type: 'int'
  })
  mrp_production_id: number;

  // @ManyToOne(() => MrpProduction)
  // @JoinColumn({ name: 'mrp_production_id' })
  // mrp_production: MrpProduction;

}