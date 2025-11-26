import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Resume line of an employee
 */
@Entity('hr_resume_line')
export class HrResumeLine {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Employee
   */
  @Column({
    type: 'int'
  })
  employee_id: number;

  // @ManyToOne(() => Employee)
  // @JoinColumn({ name: 'employee_id' })
  // employee: Employee;

  /**
   * Duration
   */
  @Column({
    type: 'int'
  })
  duration: number;

  /**
   * Type
   */
  @Column({
    type: 'int'
  })
  line_type_id: number;

  // @ManyToOne(() => LineType)
  // @JoinColumn({ name: 'line_type_id' })
  // line_type: LineType;

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
   * Course Type
   */
  @Column({
    type: 'varchar'
  })
  course_type: string;

  /**
   * External URL
   */
  @Column({
    type: 'varchar'
  })
  external_url: string;

  /**
   * Certificate Filename
   */
  @Column({
    type: 'varchar'
  })
  certificate_filename: string;

  /**
   * Date Start
   */
  @Column({
    type: 'datetime'
  })
  date_start: Date;

  /**
   * Date End
   */
  @Column({
    type: 'datetime'
  })
  date_end: Date;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Description
   */
  @Column({
    type: 'jsonb'
  })
  description: object;

  /**
   * Properties
   */
  @Column({
    type: 'jsonb'
  })
  resume_line_properties: object;

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
   * eLearning Course
   */
  @Column({
    type: 'int'
  })
  channel_id: number;

  // @ManyToOne(() => Channel)
  // @JoinColumn({ name: 'channel_id' })
  // channel: Channel;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}