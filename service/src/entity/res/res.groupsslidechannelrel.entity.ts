import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN slide_channel AND res_groups
 */
@Entity('res_groups_slide_channel_rel')
export class ResGroupsSlideChannelRel {
  @Column({
    type: 'int'
  })
  slide_channel_id: number;

  // @ManyToOne(() => SlideChannel)
  // @JoinColumn({ name: 'slide_channel_id' })
  // slide_channel: SlideChannel;

  @Column({
    type: 'int'
  })
  res_groups_id: number;

  // @ManyToOne(() => ResGroups)
  // @JoinColumn({ name: 'res_groups_id' })
  // res_groups: ResGroups;

}