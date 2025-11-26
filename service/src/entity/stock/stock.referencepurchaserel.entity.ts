import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN purchase_order AND stock_reference
 */
@Entity('stock_reference_purchase_rel')
export class StockReferencePurchaseRel {
  @Column({
    type: 'int'
  })
  purchase_id: number;

  // @ManyToOne(() => Purchase)
  // @JoinColumn({ name: 'purchase_id' })
  // purchase: Purchase;

  @Column({
    type: 'int'
  })
  reference_id: number;

  // @ManyToOne(() => Reference)
  // @JoinColumn({ name: 'reference_id' })
  // reference: Reference;

}