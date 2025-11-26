import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN digest_digest AND res_users
 */
@Entity('digest_digest_res_users_rel')
export class DigestDigestResUsersRel {
  @Column({
    type: 'int'
  })
  digest_digest_id: number;

  // @ManyToOne(() => DigestDigest)
  // @JoinColumn({ name: 'digest_digest_id' })
  // digest_digest: DigestDigest;

  @Column({
    type: 'int'
  })
  res_users_id: number;

  // @ManyToOne(() => ResUsers)
  // @JoinColumn({ name: 'res_users_id' })
  // res_users: ResUsers;

}