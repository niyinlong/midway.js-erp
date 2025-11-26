import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_rules_report AND stock_warehouse
 */
@Entity('stock_rules_report_stock_warehouse_rel')
export class StockRulesReportStockWarehouseRel {
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
  stock_warehouse_id: number;

  // @ManyToOne(() => StockWarehouse)
  // @JoinColumn({ name: 'stock_warehouse_id' })
  // stock_warehouse: StockWarehouse;

}