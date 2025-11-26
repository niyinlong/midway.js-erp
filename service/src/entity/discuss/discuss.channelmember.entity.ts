import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Channel Member
 */
@Entity('discuss_channel_member')
export class DiscussChannelMember {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Guest
   */
  @Column({
    type: 'int'
  })
  guest_id: number;

  // @ManyToOne(() => Guest)
  // @JoinColumn({ name: 'guest_id' })
  // guest: Guest;

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
   * Last Fetched
   */
  @Column({
    type: 'int'
  })
  fetched_message_id: number;

  // @ManyToOne(() => FetchedMessage)
  // @JoinColumn({ name: 'fetched_message_id' })
  // fetched_message: FetchedMessage;

  /**
   * Last Seen
   */
  @Column({
    type: 'int'
  })
  seen_message_id: number;

  // @ManyToOne(() => SeenMessage)
  // @JoinColumn({ name: 'seen_message_id' })
  // seen_message: SeenMessage;

  /**
   * New Message Separator
   */
  @Column({
    type: 'int'
  })
  new_message_separator: number;

  /**
   * Ringing session
   */
  @Column({
    type: 'int'
  })
  rtc_inviting_session_id: number;

  // @ManyToOne(() => RtcInvitingSession)
  // @JoinColumn({ name: 'rtc_inviting_session_id' })
  // rtc_inviting_session: RtcInvitingSession;

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
   * Custom channel name
   */
  @Column({
    type: 'varchar'
  })
  custom_channel_name: string;

  /**
   * Customized Notifications
   */
  @Column({
    type: 'varchar'
  })
  custom_notifications: string;

  /**
   * Mute notifications until
   */
  @Column({
    type: 'datetime'
  })
  mute_until_dt: Date;

  /**
   * Unpin date
   */
  @Column({
    type: 'datetime'
  })
  unpin_dt: Date;

  /**
   * Last Interest
   */
  @Column({
    type: 'datetime'
  })
  last_interest_dt: Date;

  /**
   * Last seen date
   */
  @Column({
    type: 'datetime'
  })
  last_seen_dt: Date;

  /**
   * Created on
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}