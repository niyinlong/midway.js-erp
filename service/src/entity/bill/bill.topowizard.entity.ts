import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Bill to Purchase Order
 */
@Entity('bill_to_po_wizard')
export class BillToPoWizard {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Purchase Order
   */
  @Column({
    type: 'int'
  })
  purchase_order_id: number;

  // @ManyToOne(() => PurchaseOrder)
  // @JoinColumn({ name: 'purchase_order_id' })
  // purchase_order: PurchaseOrder;

  /**
   * Partner
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * Created by
   */
  @Column({
    type: 'int'
  })
  create_uid: number;

  /**
   * Last Updated by
   */
  @Column({
    type: 'int'
  })
  write_uid: number;

  /**
   * Created on
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

}