import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_replenishment_info AND mrp_bom
 */
@Entity('mrp_bom_stock_replenishment_info_rel')
export class MrpBomStockReplenishmentInfoRel {
  @Column({
    type: 'int'
  })
  stock_replenishment_info_id: number;

  // @ManyToOne(() => StockReplenishmentInfo)
  // @JoinColumn({ name: 'stock_replenishment_info_id' })
  // stock_replenishment_info: StockReplenishmentInfo;

  @Column({
    type: 'int'
  })
  mrp_bom_id: number;

  // @ManyToOne(() => MrpBom)
  // @JoinColumn({ name: 'mrp_bom_id' })
  // mrp_bom: MrpBom;

}