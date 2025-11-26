import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN res_company AND res_users
 */
@Entity('res_company_users_rel')
export class ResCompanyUsersRel {
  @Column({
    type: 'int'
  })
  cid: number;

  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

}