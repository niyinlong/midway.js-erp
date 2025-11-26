import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mrp_workcenter AND mrp_workcenter
 */
@Entity('mrp_workcenter_alternative_rel')
export class MrpWorkcenterAlternativeRel {
  @Column({
    type: 'int'
  })
  workcenter_id: number;

  // @ManyToOne(() => Workcenter)
  // @JoinColumn({ name: 'workcenter_id' })
  // workcenter: Workcenter;

  @Column({
    type: 'int'
  })
  alternative_workcenter_id: number;

  // @ManyToOne(() => AlternativeWorkcenter)
  // @JoinColumn({ name: 'alternative_workcenter_id' })
  // alternative_workcenter: AlternativeWorkcenter;

}