import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_rules_report AND stock_route
 */
@Entity('stock_route_stock_rules_report_rel')
export class StockRouteStockRulesReportRel {
  @Column({
    type: 'int'
  })
  stock_rules_report_id: number;

  // @ManyToOne(() => StockRulesReport)
  // @JoinColumn({ name: 'stock_rules_report_id' })
  // stock_rules_report: StockRulesReport;

  @Column({
    type: 'int'
  })
  stock_route_id: number;

  // @ManyToOne(() => StockRoute)
  // @JoinColumn({ name: 'stock_route_id' })
  // stock_route: StockRoute;

}