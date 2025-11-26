import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN slide_channel AND slide_channel
 */
@Entity('slide_channel_prerequisite_slide_channel_rel')
export class SlideChannelPrerequisiteSlideChannelRel {
  @Column({
    type: 'int'
  })
  channel_id: number;

  // @ManyToOne(() => Channel)
  // @JoinColumn({ name: 'channel_id' })
  // channel: Channel;

  @Column({
    type: 'int'
  })
  prerequisite_channel_id: number;

  // @ManyToOne(() => PrerequisiteChannel)
  // @JoinColumn({ name: 'prerequisite_channel_id' })
  // prerequisite_channel: PrerequisiteChannel;

}