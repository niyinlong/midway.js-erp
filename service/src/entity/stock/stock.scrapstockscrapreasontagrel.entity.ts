import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_scrap AND stock_scrap_reason_tag
 */
@Entity('stock_scrap_stock_scrap_reason_tag_rel')
export class StockScrapStockScrapReasonTagRel {
  @Column({
    type: 'int'
  })
  stock_scrap_id: number;

  // @ManyToOne(() => StockScrap)
  // @JoinColumn({ name: 'stock_scrap_id' })
  // stock_scrap: StockScrap;

  @Column({
    type: 'int'
  })
  stock_scrap_reason_tag_id: number;

  // @ManyToOne(() => StockScrapReasonTag)
  // @JoinColumn({ name: 'stock_scrap_reason_tag_id' })
  // stock_scrap_reason_tag: StockScrapReasonTag;

}