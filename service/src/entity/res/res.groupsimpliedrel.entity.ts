import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN res_groups AND res_groups
 */
@Entity('res_groups_implied_rel')
export class ResGroupsImpliedRel {
  @Column({
    type: 'int'
  })
  gid: number;

  @Column({
    type: 'int'
  })
  hid: number;

}