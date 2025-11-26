import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN confirm_stock_sms AND stock_picking
 */
@Entity('stock_picking_sms_rel')
export class StockPickingSmsRel {
  @Column({
    type: 'int'
  })
  confirm_stock_sms_id: number;

  // @ManyToOne(() => ConfirmStockSms)
  // @JoinColumn({ name: 'confirm_stock_sms_id' })
  // confirm_stock_sms: ConfirmStockSms;

  @Column({
    type: 'int'
  })
  stock_picking_id: number;

  // @ManyToOne(() => StockPicking)
  // @JoinColumn({ name: 'stock_picking_id' })
  // stock_picking: StockPicking;

}