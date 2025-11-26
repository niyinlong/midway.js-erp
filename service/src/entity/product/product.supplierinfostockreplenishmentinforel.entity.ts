import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_replenishment_info AND product_supplierinfo
 */
@Entity('product_supplierinfo_stock_replenishment_info_rel')
export class ProductSupplierinfoStockReplenishmentInfoRel {
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
  product_supplierinfo_id: number;

  // @ManyToOne(() => ProductSupplierinfo)
  // @JoinColumn({ name: 'product_supplierinfo_id' })
  // product_supplierinfo: ProductSupplierinfo;

}