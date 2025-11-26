import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_move AND stock_move
 */
@Entity('stock_move_move_rel')
export class StockMoveMoveRel {
  @Column({
    type: 'int'
  })
  move_orig_id: number;

  // @ManyToOne(() => MoveOrig)
  // @JoinColumn({ name: 'move_orig_id' })
  // move_orig: MoveOrig;

  @Column({
    type: 'int'
  })
  move_dest_id: number;

  // @ManyToOne(() => MoveDest)
  // @JoinColumn({ name: 'move_dest_id' })
  // move_dest: MoveDest;

}