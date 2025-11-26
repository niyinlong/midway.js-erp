import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_package_destination AND stock_move_line
 */
@Entity('Products')
export class Products {
  @Column({
    type: 'int'
  })
  stock_package_destination_id: number;

  // @ManyToOne(() => StockPackageDestination)
  // @JoinColumn({ name: 'stock_package_destination_id' })
  // stock_package_destination: StockPackageDestination;

  @Column({
    type: 'int'
  })
  stock_move_line_id: number;

  // @ManyToOne(() => StockMoveLine)
  // @JoinColumn({ name: 'stock_move_line_id' })
  // stock_move_line: StockMoveLine;

}