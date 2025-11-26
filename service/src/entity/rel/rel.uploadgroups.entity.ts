import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN slide_channel AND res_groups
 */
@Entity('rel_upload_groups')
export class RelUploadGroups {
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
  group_id: number;

  // @ManyToOne(() => Group)
  // @JoinColumn({ name: 'group_id' })
  // group: Group;

}