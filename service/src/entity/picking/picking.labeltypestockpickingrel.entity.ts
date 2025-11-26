import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN picking_label_type AND stock_picking
 */
@Entity('picking_label_type_stock_picking_rel')
export class PickingLabelTypeStockPickingRel {
  @Column({
    type: 'int'
  })
  picking_label_type_id: number;

  // @ManyToOne(() => PickingLabelType)
  // @JoinColumn({ name: 'picking_label_type_id' })
  // picking_label_type: PickingLabelType;

  @Column({
    type: 'int'
  })
  stock_picking_id: number;

  // @ManyToOne(() => StockPicking)
  // @JoinColumn({ name: 'stock_picking_id' })
  // stock_picking: StockPicking;

}