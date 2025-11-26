import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN validate_account_move AND account_move
 */
@Entity('account_move_validate_account_move_rel')
export class AccountMoveValidateAccountMoveRel {
  @Column({
    type: 'int'
  })
  validate_account_move_id: number;

  // @ManyToOne(() => ValidateAccountMove)
  // @JoinColumn({ name: 'validate_account_move_id' })
  // validate_account_move: ValidateAccountMove;

  @Column({
    type: 'int'
  })
  account_move_id: number;

  // @ManyToOne(() => AccountMove)
  // @JoinColumn({ name: 'account_move_id' })
  // account_move: AccountMove;

}