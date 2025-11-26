import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_inventory_adjustment_name AND stock_quant
 */
@Entity('stock_inventory_adjustment_name_stock_quant_rel')
export class StockInventoryAdjustmentNameStockQuantRel {
  @Column({
    type: 'int'
  })
  stock_inventory_adjustment_name_id: number;

  // @ManyToOne(() => StockInventoryAdjustmentName)
  // @JoinColumn({ name: 'stock_inventory_adjustment_name_id' })
  // stock_inventory_adjustment_name: StockInventoryAdjustmentName;

  @Column({
    type: 'int'
  })
  stock_quant_id: number;

  // @ManyToOne(() => StockQuant)
  // @JoinColumn({ name: 'stock_quant_id' })
  // stock_quant: StockQuant;

}