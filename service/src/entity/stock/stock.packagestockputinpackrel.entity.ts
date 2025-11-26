import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_put_in_pack AND stock_package
 */
@Entity('stock_package_stock_put_in_pack_rel')
export class StockPackageStockPutInPackRel {
  @Column({
    type: 'int'
  })
  stock_put_in_pack_id: number;

  // @ManyToOne(() => StockPutInPack)
  // @JoinColumn({ name: 'stock_put_in_pack_id' })
  // stock_put_in_pack: StockPutInPack;

  @Column({
    type: 'int'
  })
  stock_package_id: number;

  // @ManyToOne(() => StockPackage)
  // @JoinColumn({ name: 'stock_package_id' })
  // stock_package: StockPackage;

}