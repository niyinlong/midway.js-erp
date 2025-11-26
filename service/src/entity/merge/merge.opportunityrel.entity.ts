import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN crm_merge_opportunity AND crm_lead
 */
@Entity('merge_opportunity_rel')
export class MergeOpportunityRel {
  @Column({
    type: 'int'
  })
  merge_id: number;

  // @ManyToOne(() => Merge)
  // @JoinColumn({ name: 'merge_id' })
  // merge: Merge;

  @Column({
    type: 'int'
  })
  opportunity_id: number;

  // @ManyToOne(() => Opportunity)
  // @JoinColumn({ name: 'opportunity_id' })
  // opportunity: Opportunity;

}