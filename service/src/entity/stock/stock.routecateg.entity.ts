import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_route AND product_category
 */
@Entity('stock_route_categ')
export class StockRouteCateg {
  @Column({
    type: 'int'
  })
  route_id: number;

  // @ManyToOne(() => Route)
  // @JoinColumn({ name: 'route_id' })
  // route: Route;

  @Column({
    type: 'int'
  })
  categ_id: number;

  // @ManyToOne(() => Categ)
  // @JoinColumn({ name: 'categ_id' })
  // categ: Categ;

}