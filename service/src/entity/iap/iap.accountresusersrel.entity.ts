import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN iap_account AND res_users
 */
@Entity('iap_account_res_users_rel')
export class IapAccountResUsersRel {
  @Column({
    type: 'int'
  })
  iap_account_id: number;

  // @ManyToOne(() => IapAccount)
  // @JoinColumn({ name: 'iap_account_id' })
  // iap_account: IapAccount;

  @Column({
    type: 'int'
  })
  res_users_id: number;

  // @ManyToOne(() => ResUsers)
  // @JoinColumn({ name: 'res_users_id' })
  // res_users: ResUsers;

}