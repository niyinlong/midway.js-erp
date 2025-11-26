import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Resource Time Off Detail
 */
@Entity('resource_calendar_leaves')
export class ResourceCalendarLeaves {
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
   * Working Hours
   */
  @Column({
    type: 'int'
  })
  calendar_id: number;

  // @ManyToOne(() => Calendar)
  // @JoinColumn({ name: 'calendar_id' })
  // calendar: Calendar;

  /**
   * Resource
   */
  @Column({
    type: 'int'
  })
  resource_id: number;

  // @ManyToOne(() => Resource)
  // @JoinColumn({ name: 'resource_id' })
  // resource: Resource;

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
   * Reason
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Time Type
   */
  @Column({
    type: 'varchar'
  })
  time_type: string;

  /**
   * Start Date
   */
  @Column({
    type: 'datetime'
  })
  date_from: Date;

  /**
   * End Date
   */
  @Column({
    type: 'datetime'
  })
  date_to: Date;

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

}