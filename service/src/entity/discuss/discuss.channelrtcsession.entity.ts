import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Mail RTC session
 */
@Entity('discuss_channel_rtc_session')
export class DiscussChannelRtcSession {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Channel Member
   */
  @Column({
    type: 'int'
  })
  channel_member_id: number;

  // @ManyToOne(() => ChannelMember)
  // @JoinColumn({ name: 'channel_member_id' })
  // channel_member: ChannelMember;

  /**
   * Channel
   */
  @Column({
    type: 'int'
  })
  channel_id: number;

  // @ManyToOne(() => Channel)
  // @JoinColumn({ name: 'channel_id' })
  // channel: Channel;

  /**
   * Partner
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * Created by
   */
  @Column({
    type: 'int'
  })
  create_uid: number;

  /**
   * Last Updated by
   */
  @Column({
    type: 'int'
  })
  write_uid: number;

  /**
   * Is sharing the screen
   */
  @Column({
    type: 'boolean'
  })
  is_screen_sharing_on: boolean;

  /**
   * Is sending user video
   */
  @Column({
    type: 'boolean'
  })
  is_camera_on: boolean;

  /**
   * Is microphone muted
   */
  @Column({
    type: 'boolean'
  })
  is_muted: boolean;

  /**
   * Has disabled incoming sound
   */
  @Column({
    type: 'boolean'
  })
  is_deaf: boolean;

  /**
   * Last Updated On
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

  /**
   * Created on
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

}