import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Resource Working Time
 */
@Entity('resource_calendar')
export class ResourceCalendar {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

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
   * Schedule Type
   */
  @Column({
    type: 'varchar'
  })
  schedule_type: string;

  /**
   * Timezone
   */
  @Column({
    type: 'varchar'
  })
  tz: string;

  /**
   * Average Hour per Day
   */
  @Column({
    type: 'int'
  })
  hours_per_day: number;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Attendance based on duration
   */
  @Column({
    type: 'boolean'
  })
  duration_based: boolean;

  /**
   * Flexible Hours
   */
  @Column({
    type: 'boolean'
  })
  flexible_hours: boolean;

  /**
   * Calendar in 2 weeks mode
   */
  @Column({
    type: 'boolean'
  })
  two_weeks_calendar: boolean;

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
   * Full Time Equivalent
   */
  @Column({
    type: 'varchar'
  })
  full_time_required_hours: string;

  /**
   * Hours per Week
   */
  @Column({
    type: 'varchar'
  })
  hours_per_week: string;

}