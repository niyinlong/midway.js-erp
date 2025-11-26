import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_put_in_pack AND stock_move_line
 */
@Entity('stock_move_line_stock_put_in_pack_rel')
export class StockMoveLineStockPutInPackRel {
  @Column({
    type: 'int'
  })
  stock_put_in_pack_id: number;

  // @ManyToOne(() => StockPutInPack)
  // @JoinColumn({ name: 'stock_put_in_pack_id' })
  // stock_put_in_pack: StockPutInPack;

  @Column({
    type: 'int'
  })
  stock_move_line_id: number;

  // @ManyToOne(() => StockMoveLine)
  // @JoinColumn({ name: 'stock_move_line_id' })
  // stock_move_line: StockMoveLine;

}