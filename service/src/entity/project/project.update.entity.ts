import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Project Update
 */
@Entity('project_update')
export class ProjectUpdate {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Progress
   */
  @Column({
    type: 'int'
  })
  progress: number;

  /**
   * Author
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Project
   */
  @Column({
    type: 'int'
  })
  project_id: number;

  // @ManyToOne(() => Project)
  // @JoinColumn({ name: 'project_id' })
  // project: Project;

  /**
   * Task Count
   */
  @Column({
    type: 'int'
  })
  task_count: number;

  /**
   * Closed Task Count
   */
  @Column({
    type: 'int'
  })
  closed_task_count: number;

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
   * Email cc
   */
  @Column({
    type: 'varchar'
  })
  email_cc: string;

  /**
   * Title
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Status
   */
  @Column({
    type: 'varchar'
  })
  status: string;

  /**
   * Date
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

  /**
   * Description
   */
  @Column({
    type: 'varchar'
  })
  description: string;

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