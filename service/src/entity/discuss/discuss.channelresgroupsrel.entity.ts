import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN discuss_channel AND res_groups
 */
@Entity('discuss_channel_res_groups_rel')
export class DiscussChannelResGroupsRel {
  @Column({
    type: 'int'
  })
  discuss_channel_id: number;

  // @ManyToOne(() => DiscussChannel)
  // @JoinColumn({ name: 'discuss_channel_id' })
  // discuss_channel: DiscussChannel;

  @Column({
    type: 'int'
  })
  res_groups_id: number;

  // @ManyToOne(() => ResGroups)
  // @JoinColumn({ name: 'res_groups_id' })
  // res_groups: ResGroups;

}