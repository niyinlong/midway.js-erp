import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN ir_embedded_actions AND res_groups
 */
@Entity('ir_embedded_actions_res_groups_rel')
export class IrEmbeddedActionsResGroupsRel {
  @Column({
    type: 'int'
  })
  ir_embedded_actions_id: number;

  // @ManyToOne(() => IrEmbeddedActions)
  // @JoinColumn({ name: 'ir_embedded_actions_id' })
  // ir_embedded_actions: IrEmbeddedActions;

  @Column({
    type: 'int'
  })
  res_groups_id: number;

  // @ManyToOne(() => ResGroups)
  // @JoinColumn({ name: 'res_groups_id' })
  // res_groups: ResGroups;

}