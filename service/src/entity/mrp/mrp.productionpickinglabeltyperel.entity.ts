import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN picking_label_type AND mrp_production
 */
@Entity('mrp_production_picking_label_type_rel')
export class MrpProductionPickingLabelTypeRel {
  @Column({
    type: 'int'
  })
  picking_label_type_id: number;

  // @ManyToOne(() => PickingLabelType)
  // @JoinColumn({ name: 'picking_label_type_id' })
  // picking_label_type: PickingLabelType;

  @Column({
    type: 'int'
  })
  mrp_production_id: number;

  // @ManyToOne(() => MrpProduction)
  // @JoinColumn({ name: 'mrp_production_id' })
  // mrp_production: MrpProduction;

}