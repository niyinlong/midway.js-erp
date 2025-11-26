import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mrp_routing_workcenter AND mrp_routing_workcenter
 */
@Entity('mrp_routing_workcenter_dependencies_rel')
export class MrpRoutingWorkcenterDependenciesRel {
  @Column({
    type: 'int'
  })
  operation_id: number;

  // @ManyToOne(() => Operation)
  // @JoinColumn({ name: 'operation_id' })
  // operation: Operation;

  @Column({
    type: 'int'
  })
  blocked_by_id: number;

  // @ManyToOne(() => BlockedBy)
  // @JoinColumn({ name: 'blocked_by_id' })
  // blocked_by: BlockedBy;

}