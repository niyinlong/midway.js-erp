import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Task Recurrence
 */
@Entity('project_task_recurrence')
export class ProjectTaskRecurrence {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Repeat Every
   */
  @Column({
    type: 'int'
  })
  repeat_interval: number;

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
   * Repeat Unit
   */
  @Column({
    type: 'varchar'
  })
  repeat_unit: string;

  /**
   * Until
   */
  @Column({
    type: 'varchar'
  })
  repeat_type: string;

  /**
   * End Date
   */
  @Column({
    type: 'datetime'
  })
  repeat_until: Date;

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