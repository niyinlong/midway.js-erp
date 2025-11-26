import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_move_reversal AND account_move
 */
@Entity('account_move_reversal_move')
export class AccountMoveReversalMove {
  @Column({
    type: 'int'
  })
  reversal_id: number;

  // @ManyToOne(() => Reversal)
  // @JoinColumn({ name: 'reversal_id' })
  // reversal: Reversal;

  @Column({
    type: 'int'
  })
  move_id: number;

  // @ManyToOne(() => Move)
  // @JoinColumn({ name: 'move_id' })
  // move: Move;

}