import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_request_count AND stock_quant
 */
@Entity('stock_quant_stock_request_count_rel')
export class StockQuantStockRequestCountRel {
  @Column({
    type: 'int'
  })
  stock_request_count_id: number;

  // @ManyToOne(() => StockRequestCount)
  // @JoinColumn({ name: 'stock_request_count_id' })
  // stock_request_count: StockRequestCount;

  @Column({
    type: 'int'
  })
  stock_quant_id: number;

  // @ManyToOne(() => StockQuant)
  // @JoinColumn({ name: 'stock_quant_id' })
  // stock_quant: StockQuant;

}