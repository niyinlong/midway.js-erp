import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_move AND account_move
 */
@Entity('adjusting_entries__account_move')
export class AdjustingEntriesAccountMove {
  @Column({
    type: 'int'
  })
  move_id: number;

  // @ManyToOne(() => Move)
  // @JoinColumn({ name: 'move_id' })
  // move: Move;

  @Column({
    type: 'int'
  })
  adjusting_entry_move_id: number;

  // @ManyToOne(() => AdjustingEntryMove)
  // @JoinColumn({ name: 'adjusting_entry_move_id' })
  // adjusting_entry_move: AdjustingEntryMove;

}