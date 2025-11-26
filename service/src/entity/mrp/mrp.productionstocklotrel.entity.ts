import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mrp_production AND stock_lot
 */
@Entity('mrp_production_stock_lot_rel')
export class MrpProductionStockLotRel {
  @Column({
    type: 'int'
  })
  mrp_production_id: number;

  // @ManyToOne(() => MrpProduction)
  // @JoinColumn({ name: 'mrp_production_id' })
  // mrp_production: MrpProduction;

  @Column({
    type: 'int'
  })
  stock_lot_id: number;

  // @ManyToOne(() => StockLot)
  // @JoinColumn({ name: 'stock_lot_id' })
  // stock_lot: StockLot;

}