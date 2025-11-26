import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mrp_production AND stock_reference
 */
@Entity('stock_reference_production_rel')
export class StockReferenceProductionRel {
  @Column({
    type: 'int'
  })
  production_id: number;

  // @ManyToOne(() => Production)
  // @JoinColumn({ name: 'production_id' })
  // production: Production;

  @Column({
    type: 'int'
  })
  reference_id: number;

  // @ManyToOne(() => Reference)
  // @JoinColumn({ name: 'reference_id' })
  // reference: Reference;

}