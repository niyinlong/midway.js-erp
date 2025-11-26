import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_move AND stock_reference
 */
@Entity('stock_reference_move_rel')
export class StockReferenceMoveRel {
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
  reference_id: number;

  // @ManyToOne(() => Reference)
  // @JoinColumn({ name: 'reference_id' })
  // reference: Reference;

}