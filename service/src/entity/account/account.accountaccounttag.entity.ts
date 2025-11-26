import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_account AND account_account_tag
 */
@Entity('account_account_account_tag')
export class AccountAccountAccountTag {
  @Column({
    type: 'int'
  })
  account_account_id: number;

  // @ManyToOne(() => AccountAccount)
  // @JoinColumn({ name: 'account_account_id' })
  // account_account: AccountAccount;

  @Column({
    type: 'int'
  })
  account_account_tag_id: number;

  // @ManyToOne(() => AccountAccountTag)
  // @JoinColumn({ name: 'account_account_tag_id' })
  // account_account_tag: AccountAccountTag;

}