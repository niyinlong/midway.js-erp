import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_picking AND stock_package_history
 */
@Entity('stock_package_history_stock_picking_rel')
export class StockPackageHistoryStockPickingRel {
  @Column({
    type: 'int'
  })
  stock_picking_id: number;

  // @ManyToOne(() => StockPicking)
  // @JoinColumn({ name: 'stock_picking_id' })
  // stock_picking: StockPicking;

  @Column({
    type: 'int'
  })
  stock_package_history_id: number;

  // @ManyToOne(() => StockPackageHistory)
  // @JoinColumn({ name: 'stock_package_history_id' })
  // stock_package_history: StockPackageHistory;

}