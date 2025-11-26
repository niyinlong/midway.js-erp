import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mrp_workcenter AND mrp_workcenter_tag
 */
@Entity('mrp_workcenter_mrp_workcenter_tag_rel')
export class MrpWorkcenterMrpWorkcenterTagRel {
  @Column({
    type: 'int'
  })
  mrp_workcenter_id: number;

  // @ManyToOne(() => MrpWorkcenter)
  // @JoinColumn({ name: 'mrp_workcenter_id' })
  // mrp_workcenter: MrpWorkcenter;

  @Column({
    type: 'int'
  })
  mrp_workcenter_tag_id: number;

  // @ManyToOne(() => MrpWorkcenterTag)
  // @JoinColumn({ name: 'mrp_workcenter_tag_id' })
  // mrp_workcenter_tag: MrpWorkcenterTag;

}