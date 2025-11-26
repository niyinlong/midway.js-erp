import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN slide_channel AND slide_channel_tag
 */
@Entity('slide_channel_tag_rel')
export class SlideChannelTagRel {
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
  tag_id: number;

  // @ManyToOne(() => Tag)
  // @JoinColumn({ name: 'tag_id' })
  // tag: Tag;

}