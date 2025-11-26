import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN product_label_layout AND stock_move
 */
@Entity('product_label_layout_stock_move_rel')
export class ProductLabelLayoutStockMoveRel {
  @Column({
    type: 'int'
  })
  product_label_layout_id: number;

  // @ManyToOne(() => ProductLabelLayout)
  // @JoinColumn({ name: 'product_label_layout_id' })
  // product_label_layout: ProductLabelLayout;

  @Column({
    type: 'int'
  })
  stock_move_id: number;

  // @ManyToOne(() => StockMove)
  // @JoinColumn({ name: 'stock_move_id' })
  // stock_move: StockMove;

}