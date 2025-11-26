import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_orderpoint_snooze AND stock_warehouse_orderpoint
 */
@Entity('stock_orderpoint_snooze_stock_warehouse_orderpoint_rel')
export class StockOrderpointSnoozeStockWarehouseOrderpointRel {
  @Column({
    type: 'int'
  })
  stock_orderpoint_snooze_id: number;

  // @ManyToOne(() => StockOrderpointSnooze)
  // @JoinColumn({ name: 'stock_orderpoint_snooze_id' })
  // stock_orderpoint_snooze: StockOrderpointSnooze;

  @Column({
    type: 'int'
  })
  stock_warehouse_orderpoint_id: number;

  // @ManyToOne(() => StockWarehouseOrderpoint)
  // @JoinColumn({ name: 'stock_warehouse_orderpoint_id' })
  // stock_warehouse_orderpoint: StockWarehouseOrderpoint;

}