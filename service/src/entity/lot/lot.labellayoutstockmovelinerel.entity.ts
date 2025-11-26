import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN lot_label_layout AND stock_move_line
 */
@Entity('lot_label_layout_stock_move_line_rel')
export class LotLabelLayoutStockMoveLineRel {
  @Column({
    type: 'int'
  })
  lot_label_layout_id: number;

  // @ManyToOne(() => LotLabelLayout)
  // @JoinColumn({ name: 'lot_label_layout_id' })
  // lot_label_layout: LotLabelLayout;

  @Column({
    type: 'int'
  })
  stock_move_line_id: number;

  // @ManyToOne(() => StockMoveLine)
  // @JoinColumn({ name: 'stock_move_line_id' })
  // stock_move_line: StockMoveLine;

}