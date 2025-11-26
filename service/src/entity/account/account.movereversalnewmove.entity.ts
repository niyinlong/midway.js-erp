import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_move_reversal AND account_move
 */
@Entity('account_move_reversal_new_move')
export class AccountMoveReversalNewMove {
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
  new_move_id: number;

  // @ManyToOne(() => NewMove)
  // @JoinColumn({ name: 'new_move_id' })
  // new_move: NewMove;

}