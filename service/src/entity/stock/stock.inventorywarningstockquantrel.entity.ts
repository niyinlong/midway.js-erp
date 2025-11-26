import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_inventory_warning AND stock_quant
 */
@Entity('stock_inventory_warning_stock_quant_rel')
export class StockInventoryWarningStockQuantRel {
  @Column({
    type: 'int'
  })
  stock_inventory_warning_id: number;

  // @ManyToOne(() => StockInventoryWarning)
  // @JoinColumn({ name: 'stock_inventory_warning_id' })
  // stock_inventory_warning: StockInventoryWarning;

  @Column({
    type: 'int'
  })
  stock_quant_id: number;

  // @ManyToOne(() => StockQuant)
  // @JoinColumn({ name: 'stock_quant_id' })
  // stock_quant: StockQuant;

}