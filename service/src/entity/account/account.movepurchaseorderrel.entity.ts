import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN purchase_order AND account_move
 */
@Entity('account_move_purchase_order_rel')
export class AccountMovePurchaseOrderRel {
  @Column({
    type: 'int'
  })
  purchase_order_id: number;

  // @ManyToOne(() => PurchaseOrder)
  // @JoinColumn({ name: 'purchase_order_id' })
  // purchase_order: PurchaseOrder;

  @Column({
    type: 'int'
  })
  account_move_id: number;

  // @ManyToOne(() => AccountMove)
  // @JoinColumn({ name: 'account_move_id' })
  // account_move: AccountMove;

}