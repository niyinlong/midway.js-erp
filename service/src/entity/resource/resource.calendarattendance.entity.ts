import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Work Detail
 */
@Entity('resource_calendar_attendance')
export class ResourceCalendarAttendance {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Resource''s Calendar
   */
  @Column({
    type: 'int'
  })
  calendar_id: number;

  // @ManyToOne(() => Calendar)
  // @JoinColumn({ name: 'calendar_id' })
  // calendar: Calendar;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Day of Week
   */
  @Column({
    type: 'varchar'
  })
  dayofweek: string;

  /**
   * Day Period
   */
  @Column({
    type: 'varchar'
  })
  day_period: string;

  /**
   * Week Number
   */
  @Column({
    type: 'varchar'
  })
  week_type: string;

  /**
   * Display Type
   */
  @Column({
    type: 'varchar'
  })
  display_type: string;

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
   * Work from
   */
  @Column({
    type: 'varchar'
  })
  hour_from: string;

  /**
   * Work to
   */
  @Column({
    type: 'varchar'
  })
  hour_to: string;

  /**
   * Duration (hours)
   */
  @Column({
    type: 'varchar'
  })
  duration_hours: string;

  /**
   * Duration (days)
   */
  @Column({
    type: 'varchar'
  })
  duration_days: string;

}