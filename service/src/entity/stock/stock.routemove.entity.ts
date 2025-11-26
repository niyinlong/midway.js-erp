import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_move AND stock_route
 */
@Entity('stock_route_move')
export class StockRouteMove {
  @Column({
    type: 'int'
  })
  move_id: number;

  // @ManyToOne(() => Move)
  // @JoinColumn({ name: 'move_id' })
  // move: Move;

  @Column({
    type: 'int'
  })
  route_id: number;

  // @ManyToOne(() => Route)
  // @JoinColumn({ name: 'route_id' })
  // route: Route;

}