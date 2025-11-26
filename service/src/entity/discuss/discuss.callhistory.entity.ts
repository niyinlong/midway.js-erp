import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Keep the call history
 */
@Entity('discuss_call_history')
export class DiscussCallHistory {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Start Call Message
   */
  @Column({
    type: 'int'
  })
  start_call_message_id: number;

  // @ManyToOne(() => StartCallMessage)
  // @JoinColumn({ name: 'start_call_message_id' })
  // start_call_message: StartCallMessage;

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
   * Start Dt
   */
  @Column({
    type: 'datetime'
  })
  start_dt: Date;

  /**
   * End Dt
   */
  @Column({
    type: 'datetime'
  })
  end_dt: Date;

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

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}