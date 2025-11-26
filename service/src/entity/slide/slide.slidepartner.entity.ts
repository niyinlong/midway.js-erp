import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Slide / Partner decorated m2m
 */
@Entity('slide_slide_partner')
export class SlideSlidePartner {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Content
   */
  @Column({
    type: 'int'
  })
  slide_id: number;

  // @ManyToOne(() => Slide)
  // @JoinColumn({ name: 'slide_id' })
  // slide: Slide;

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
   * Vote
   */
  @Column({
    type: 'int'
  })
  vote: number;

  /**
   * Quiz attempts count
   */
  @Column({
    type: 'int'
  })
  quiz_attempts_count: number;

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
   * Completed
   */
  @Column({
    type: 'boolean'
  })
  completed: boolean;

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