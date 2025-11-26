import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN purchase_order_line AND stock_move
 */
@Entity('stock_move_created_purchase_line_rel')
export class StockMoveCreatedPurchaseLineRel {
  @Column({
    type: 'int'
  })
  created_purchase_line_id: number;

  // @ManyToOne(() => CreatedPurchaseLine)
  // @JoinColumn({ name: 'created_purchase_line_id' })
  // created_purchase_line: CreatedPurchaseLine;

  @Column({
    type: 'int'
  })
  move_id: number;

  // @ManyToOne(() => Move)
  // @JoinColumn({ name: 'move_id' })
  // move: Move;

}