import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Channel / Partners (Members)
 */
@Entity('slide_channel_partner')
export class SlideChannelPartner {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Course
   */
  @Column({
    type: 'int'
  })
  channel_id: number;

  // @ManyToOne(() => Channel)
  // @JoinColumn({ name: 'channel_id' })
  // channel: Channel;

  /**
   * % Completed Contents
   */
  @Column({
    type: 'int'
  })
  completion: number;

  /**
   * # Completed Contents
   */
  @Column({
    type: 'int'
  })
  completed_slides_count: number;

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
   * Attendee Status
   */
  @Column({
    type: 'varchar'
  })
  member_status: string;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Last Invitation Date
   */
  @Column({
    type: 'datetime'
  })
  last_invitation_date: Date;

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