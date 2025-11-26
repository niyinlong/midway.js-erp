import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_backorder_confirmation AND stock_picking
 */
@Entity('stock_picking_backorder_rel')
export class StockPickingBackorderRel {
  @Column({
    type: 'int'
  })
  stock_backorder_confirmation_id: number;

  // @ManyToOne(() => StockBackorderConfirmation)
  // @JoinColumn({ name: 'stock_backorder_confirmation_id' })
  // stock_backorder_confirmation: StockBackorderConfirmation;

  @Column({
    type: 'int'
  })
  stock_picking_id: number;

  // @ManyToOne(() => StockPicking)
  // @JoinColumn({ name: 'stock_picking_id' })
  // stock_picking: StockPicking;

}