import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN ir_act_server AND res_groups
 */
@Entity('ir_act_server_group_rel')
export class IrActServerGroupRel {
  @Column({
    type: 'int'
  })
  act_id: number;

  // @ManyToOne(() => Act)
  // @JoinColumn({ name: 'act_id' })
  // act: Act;

  @Column({
    type: 'int'
  })
  gid: number;

}