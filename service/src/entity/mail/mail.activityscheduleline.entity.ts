import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Mail Activity Schedule Line
 */
@Entity('mail_activity_schedule_line')
export class MailActivityScheduleLine {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Activity Schedule
   */
  @Column({
    type: 'int'
  })
  activity_schedule_id: number;

  // @ManyToOne(() => ActivitySchedule)
  // @JoinColumn({ name: 'activity_schedule_id' })
  // activity_schedule: ActivitySchedule;

  /**
   * Responsible User
   */
  @Column({
    type: 'int'
  })
  responsible_user_id: number;

  // @ManyToOne(() => ResponsibleUser)
  // @JoinColumn({ name: 'responsible_user_id' })
  // responsible_user: ResponsibleUser;

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
   * Line Description
   */
  @Column({
    type: 'varchar'
  })
  line_description: string;

  /**
   * Date Deadline
   */
  @Column({
    type: 'datetime'
  })
  line_date_deadline: Date;

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