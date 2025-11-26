import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_move_line AND account_account_tag
 */
@Entity('account_account_tag_account_move_line_rel')
export class AccountAccountTagAccountMoveLineRel {
  @Column({
    type: 'int'
  })
  account_move_line_id: number;

  // @ManyToOne(() => AccountMoveLine)
  // @JoinColumn({ name: 'account_move_line_id' })
  // account_move_line: AccountMoveLine;

  @Column({
    type: 'int'
  })
  account_account_tag_id: number;

  // @ManyToOne(() => AccountAccountTag)
  // @JoinColumn({ name: 'account_account_tag_id' })
  // account_account_tag: AccountAccountTag;

}