import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN digest_tip AND res_users
 */
@Entity('digest_tip_res_users_rel')
export class DigestTipResUsersRel {
  @Column({
    type: 'int'
  })
  digest_tip_id: number;

  // @ManyToOne(() => DigestTip)
  // @JoinColumn({ name: 'digest_tip_id' })
  // digest_tip: DigestTip;

  @Column({
    type: 'int'
  })
  res_users_id: number;

  // @ManyToOne(() => ResUsers)
  // @JoinColumn({ name: 'res_users_id' })
  // res_users: ResUsers;

}