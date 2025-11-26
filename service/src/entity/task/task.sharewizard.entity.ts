import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Task Sharing
 */
@Entity('task_share_wizard')
export class TaskShareWizard {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Related Document ID
   */
  @Column({
    type: 'int'
  })
  res_id: number;

  // @ManyToOne(() => Res)
  // @JoinColumn({ name: 'res_id' })
  // res: Res;

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
   * Related Document Model
   */
  @Column({
    type: 'varchar'
  })
  res_model: string;

  /**
   * Note
   */
  @Column({
    type: 'varchar'
  })
  note: string;

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