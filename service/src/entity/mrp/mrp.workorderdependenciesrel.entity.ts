import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mrp_workorder AND mrp_workorder
 */
@Entity('mrp_workorder_dependencies_rel')
export class MrpWorkorderDependenciesRel {
  @Column({
    type: 'int'
  })
  workorder_id: number;

  // @ManyToOne(() => Workorder)
  // @JoinColumn({ name: 'workorder_id' })
  // workorder: Workorder;

  @Column({
    type: 'int'
  })
  blocked_by_id: number;

  // @ManyToOne(() => BlockedBy)
  // @JoinColumn({ name: 'blocked_by_id' })
  // blocked_by: BlockedBy;

}