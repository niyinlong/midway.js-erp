import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_inventory_conflict AND stock_quant
 */
@Entity('stock_inventory_conflict_stock_quant_rel')
export class StockInventoryConflictStockQuantRel {
  @Column({
    type: 'int'
  })
  stock_inventory_conflict_id: number;

  // @ManyToOne(() => StockInventoryConflict)
  // @JoinColumn({ name: 'stock_inventory_conflict_id' })
  // stock_inventory_conflict: StockInventoryConflict;

  @Column({
    type: 'int'
  })
  stock_quant_id: number;

  // @ManyToOne(() => StockQuant)
  // @JoinColumn({ name: 'stock_quant_id' })
  // stock_quant: StockQuant;

}