import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Scheduled Actions
 */
@Entity('ir_cron')
export class IrCron {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Server action
   */
  @Column({
    type: 'int'
  })
  ir_actions_server_id: number;

  // @ManyToOne(() => IrActionsServer)
  // @JoinColumn({ name: 'ir_actions_server_id' })
  // ir_actions_server: IrActionsServer;

  /**
   * Scheduler User
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Interval Number
   */
  @Column({
    type: 'int'
  })
  interval_number: number;

  /**
   * Priority
   */
  @Column({
    type: 'int'
  })
  priority: number;

  /**
   * Failure Count
   */
  @Column({
    type: 'int'
  })
  failure_count: number;

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
  cron_name: string;

  /**
   * Interval Unit
   */
  @Column({
    type: 'varchar'
  })
  interval_type: string;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Next Execution Date
   */
  @Column({
    type: 'datetime'
  })
  nextcall: Date;

  /**
   * Last Execution Date
   */
  @Column({
    type: 'datetime'
  })
  lastcall: Date;

  /**
   * First Failure Date
   */
  @Column({
    type: 'datetime'
  })
  first_failure_date: Date;

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

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}