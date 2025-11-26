import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Personal Task Stage
 */
@Entity('project_task_user_rel')
export class ProjectTaskUserRel {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Task
   */
  @Column({
    type: 'int'
  })
  task_id: number;

  // @ManyToOne(() => Task)
  // @JoinColumn({ name: 'task_id' })
  // task: Task;

  /**
   * User
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Stage
   */
  @Column({
    type: 'int'
  })
  stage_id: number;

  // @ManyToOne(() => Stage)
  // @JoinColumn({ name: 'stage_id' })
  // stage: Stage;

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