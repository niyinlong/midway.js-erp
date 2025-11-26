import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN sale_order_line AND stock_route
 */
@Entity('sale_order_line_stock_route_rel')
export class SaleOrderLineStockRouteRel {
  @Column({
    type: 'int'
  })
  sale_order_line_id: number;

  // @ManyToOne(() => SaleOrderLine)
  // @JoinColumn({ name: 'sale_order_line_id' })
  // sale_order_line: SaleOrderLine;

  @Column({
    type: 'int'
  })
  stock_route_id: number;

  // @ManyToOne(() => StockRoute)
  // @JoinColumn({ name: 'stock_route_id' })
  // stock_route: StockRoute;

}