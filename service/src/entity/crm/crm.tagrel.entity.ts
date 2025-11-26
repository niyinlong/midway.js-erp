import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN crm_lead AND crm_tag
 */
@Entity('crm_tag_rel')
export class CrmTagRel {
  @Column({
    type: 'int'
  })
  lead_id: number;

  // @ManyToOne(() => Lead)
  // @JoinColumn({ name: 'lead_id' })
  // lead: Lead;

  @Column({
    type: 'int'
  })
  tag_id: number;

  // @ManyToOne(() => Tag)
  // @JoinColumn({ name: 'tag_id' })
  // tag: Tag;

}