import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN res_groups AND res_users
 */
@Entity('res_groups_users_rel')
export class ResGroupsUsersRel {
  @Column({
    type: 'int'
  })
  gid: number;

  @Column({
    type: 'int'
  })
  uid: number;

}