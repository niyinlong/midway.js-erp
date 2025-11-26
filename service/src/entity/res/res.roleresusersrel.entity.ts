import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN res_role AND res_users
 */
@Entity('res_role_res_users_rel')
export class ResRoleResUsersRel {
  @Column({
    type: 'int'
  })
  res_role_id: number;

  // @ManyToOne(() => ResRole)
  // @JoinColumn({ name: 'res_role_id' })
  // res_role: ResRole;

  @Column({
    type: 'int'
  })
  res_users_id: number;

  // @ManyToOne(() => ResUsers)
  // @JoinColumn({ name: 'res_users_id' })
  // res_users: ResUsers;

}