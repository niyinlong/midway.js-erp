import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN purchase_order AND stock_picking
 */
@Entity('purchase_order_stock_picking_rel')
export class PurchaseOrderStockPickingRel {
  @Column({
    type: 'int'
  })
  purchase_order_id: number;

  // @ManyToOne(() => PurchaseOrder)
  // @JoinColumn({ name: 'purchase_order_id' })
  // purchase_order: PurchaseOrder;

  @Column({
    type: 'int'
  })
  stock_picking_id: number;

  // @ManyToOne(() => StockPicking)
  // @JoinColumn({ name: 'stock_picking_id' })
  // stock_picking: StockPicking;

}