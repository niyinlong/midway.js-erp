import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Calendar Event
 */
@Entity('calendar_event')
export class CalendarEvent {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Organizer
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Discuss Channel
   */
  @Column({
    type: 'int'
  })
  videocall_channel_id: number;

  // @ManyToOne(() => VideocallChannel)
  // @JoinColumn({ name: 'videocall_channel_id' })
  // videocall_channel: VideocallChannel;

  /**
   * Document ID
   */
  @Column({
    type: 'int'
  })
  res_id: number;

  // @ManyToOne(() => Res)
  // @JoinColumn({ name: 'res_id' })
  // res: Res;

  /**
   * Document Model
   */
  @Column({
    type: 'int'
  })
  res_model_id: number;

  // @ManyToOne(() => ResModel)
  // @JoinColumn({ name: 'res_model_id' })
  // res_model: ResModel;

  /**
   * Recurrence Rule
   */
  @Column({
    type: 'int'
  })
  recurrence_id: number;

  // @ManyToOne(() => Recurrence)
  // @JoinColumn({ name: 'recurrence_id' })
  // recurrence: Recurrence;

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
   * Meeting Subject
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Location
   */
  @Column({
    type: 'varchar'
  })
  location: string;

  /**
   * Meeting URL
   */
  @Column({
    type: 'varchar'
  })
  videocall_location: string;

  /**
   * Invitation Token
   */
  @Column({
    type: 'varchar'
  })
  access_token: string;

  /**
   * Privacy
   */
  @Column({
    type: 'varchar'
  })
  privacy: string;

  /**
   * Show as
   */
  @Column({
    type: 'varchar'
  })
  show_as: string;

  /**
   * Document Model Name
   */
  @Column({
    type: 'varchar'
  })
  res_model: string;

  /**
   * Start Date
   */
  @Column({
    type: 'datetime'
  })
  start_date: Date;

  /**
   * End Date
   */
  @Column({
    type: 'datetime'
  })
  stop_date: Date;

  /**
   * Description
   */
  @Column({
    type: 'varchar'
  })
  description: string;

  /**
   * Notes
   */
  @Column({
    type: 'varchar'
  })
  notes: string;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * All Day
   */
  @Column({
    type: 'boolean'
  })
  allday: boolean;

  /**
   * Recurrent
   */
  @Column({
    type: 'boolean'
  })
  recurrency: boolean;

  /**
   * Follow Recurrence
   */
  @Column({
    type: 'boolean'
  })
  follow_recurrence: boolean;

  /**
   * Start
   */
  @Column({
    type: 'datetime'
  })
  start: Date;

  /**
   * Stop
   */
  @Column({
    type: 'datetime'
  })
  stop: Date;

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

  /**
   * Duration
   */
  @Column({
    type: 'varchar'
  })
  duration: string;

  /**
   * Opportunity
   */
  @Column({
    type: 'int'
  })
  opportunity_id: number;

  // @ManyToOne(() => Opportunity)
  // @JoinColumn({ name: 'opportunity_id' })
  // opportunity: Opportunity;

}