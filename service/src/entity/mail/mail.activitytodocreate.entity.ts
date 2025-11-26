import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Create activity and todo at the same time
 */
@Entity('mail_activity_todo_create')
export class MailActivityTodoCreate {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Assigned to
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

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
   * Summary
   */
  @Column({
    type: 'varchar'
  })
  summary: string;

  /**
   * Due Date
   */
  @Column({
    type: 'datetime'
  })
  date_deadline: Date;

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