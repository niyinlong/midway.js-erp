import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN sale_order AND stock_reference
 */
@Entity('stock_reference_sale_rel')
export class StockReferenceSaleRel {
  @Column({
    type: 'int'
  })
  sale_id: number;

  // @ManyToOne(() => Sale)
  // @JoinColumn({ name: 'sale_id' })
  // sale: Sale;

  @Column({
    type: 'int'
  })
  reference_id: number;

  // @ManyToOne(() => Reference)
  // @JoinColumn({ name: 'reference_id' })
  // reference: Reference;

}