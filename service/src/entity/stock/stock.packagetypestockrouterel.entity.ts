import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_package_type AND stock_route
 */
@Entity('stock_package_type_stock_route_rel')
export class StockPackageTypeStockRouteRel {
  @Column({
    type: 'int'
  })
  stock_package_type_id: number;

  // @ManyToOne(() => StockPackageType)
  // @JoinColumn({ name: 'stock_package_type_id' })
  // stock_package_type: StockPackageType;

  @Column({
    type: 'int'
  })
  stock_route_id: number;

  // @ManyToOne(() => StockRoute)
  // @JoinColumn({ name: 'stock_route_id' })
  // stock_route: StockRoute;

}