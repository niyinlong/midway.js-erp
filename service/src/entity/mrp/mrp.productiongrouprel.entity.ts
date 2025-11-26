import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mrp_production_group AND mrp_production_group
 */
@Entity('mrp_production_group_rel')
export class MrpProductionGroupRel {
  @Column({
    type: 'int'
  })
  parent_group_id: number;

  // @ManyToOne(() => ParentGroup)
  // @JoinColumn({ name: 'parent_group_id' })
  // parent_group: ParentGroup;

  @Column({
    type: 'int'
  })
  child_group_id: number;

  // @ManyToOne(() => ChildGroup)
  // @JoinColumn({ name: 'child_group_id' })
  // child_group: ChildGroup;

}