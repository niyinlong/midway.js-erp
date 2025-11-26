import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_warehouse AND stock_warehouse
 */
@Entity('stock_wh_resupply_table')
export class StockWhResupplyTable {
  @Column({
    type: 'int'
  })
  supplied_wh_id: number;

  // @ManyToOne(() => SuppliedWh)
  // @JoinColumn({ name: 'supplied_wh_id' })
  // supplied_wh: SuppliedWh;

  @Column({
    type: 'int'
  })
  supplier_wh_id: number;

  // @ManyToOne(() => SupplierWh)
  // @JoinColumn({ name: 'supplier_wh_id' })
  // supplier_wh: SupplierWh;

}