import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN utm_campaign AND utm_tag
 */
@Entity('utm_tag_rel')
export class UtmTagRel {
  @Column({
    type: 'int'
  })
  tag_id: number;

  // @ManyToOne(() => Tag)
  // @JoinColumn({ name: 'tag_id' })
  // tag: Tag;

  @Column({
    type: 'int'
  })
  campaign_id: number;

  // @ManyToOne(() => Campaign)
  // @JoinColumn({ name: 'campaign_id' })
  // campaign: Campaign;

}