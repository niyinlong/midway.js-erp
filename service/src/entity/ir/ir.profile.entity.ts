import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Profiling results
 */
@Entity('ir_profile')
export class IrProfile {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Queries Count
   */
  @Column({
    type: 'int'
  })
  sql_count: number;

  /**
   * Entry count
   */
  @Column({
    type: 'int'
  })
  entry_count: number;

  /**
   * Session
   */
  @Column({
    type: 'varchar'
  })
  session: string;

  /**
   * Description
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Initial stack trace
   */
  @Column({
    type: 'varchar'
  })
  init_stack_trace: string;

  /**
   * Sql
   */
  @Column({
    type: 'varchar'
  })
  sql: string;

  /**
   * Traces Async
   */
  @Column({
    type: 'varchar'
  })
  traces_async: string;

  /**
   * Traces Sync
   */
  @Column({
    type: 'varchar'
  })
  traces_sync: string;

  /**
   * others
   */
  @Column({
    type: 'varchar'
  })
  others: string;

  /**
   * Qweb
   */
  @Column({
    type: 'varchar'
  })
  qweb: string;

  /**
   * Duration
   */
  @Column({
    type: 'int'
  })
  duration: number;

  /**
   * CPU Duration
   */
  @Column({
    type: 'int'
  })
  cpu_duration: number;

  /**
   * Creation Date
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

}