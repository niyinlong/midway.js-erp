import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Event Recurrence Rule
 */
@Entity('calendar_recurrence')
export class CalendarRecurrence {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Base Event
   */
  @Column({
    type: 'int'
  })
  base_event_id: number;

  // @ManyToOne(() => BaseEvent)
  // @JoinColumn({ name: 'base_event_id' })
  // base_event: BaseEvent;

  /**
   * Count
   */
  @Column({
    type: 'int'
  })
  count: number;

  /**
   * Day
   */
  @Column({
    type: 'int'
  })
  day: number;

  /**
   * Trigger
   */
  @Column({
    type: 'int'
  })
  trigger_id: number;

  // @ManyToOne(() => Trigger)
  // @JoinColumn({ name: 'trigger_id' })
  // trigger: Trigger;

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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Timezone
   */
  @Column({
    type: 'varchar'
  })
  event_tz: string;

  /**
   * Rrule
   */
  @Column({
    type: 'varchar'
  })
  rrule: string;

  /**
   * Rrule Type
   */
  @Column({
    type: 'varchar'
  })
  rrule_type: string;

  /**
   * End Type
   */
  @Column({
    type: 'varchar'
  })
  end_type: string;

  /**
   * Month By
   */
  @Column({
    type: 'varchar'
  })
  month_by: string;

  /**
   * Weekday
   */
  @Column({
    type: 'varchar'
  })
  weekday: string;

  /**
   * By day
   */
  @Column({
    type: 'varchar'
  })
  byday: string;

  /**
   * Repeat Until
   */
  @Column({
    type: 'datetime'
  })
  until: Date;

  /**
   * Mon
   */
  @Column({
    type: 'boolean'
  })
  mon: boolean;

  /**
   * Tue
   */
  @Column({
    type: 'boolean'
  })
  tue: boolean;

  /**
   * Wed
   */
  @Column({
    type: 'boolean'
  })
  wed: boolean;

  /**
   * Thu
   */
  @Column({
    type: 'boolean'
  })
  thu: boolean;

  /**
   * Fri
   */
  @Column({
    type: 'boolean'
  })
  fri: boolean;

  /**
   * Sat
   */
  @Column({
    type: 'boolean'
  })
  sat: boolean;

  /**
   * Sun
   */
  @Column({
    type: 'boolean'
  })
  sun: boolean;

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