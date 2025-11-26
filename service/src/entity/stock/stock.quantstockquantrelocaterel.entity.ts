import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_quant_relocate AND stock_quant
 */
@Entity('stock_quant_stock_quant_relocate_rel')
export class StockQuantStockQuantRelocateRel {
  @Column({
    type: 'int'
  })
  stock_quant_relocate_id: number;

  // @ManyToOne(() => StockQuantRelocate)
  // @JoinColumn({ name: 'stock_quant_relocate_id' })
  // stock_quant_relocate: StockQuantRelocate;

  @Column({
    type: 'int'
  })
  stock_quant_id: number;

  // @ManyToOne(() => StockQuant)
  // @JoinColumn({ name: 'stock_quant_id' })
  // stock_quant: StockQuant;

}