import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Progress of Scheduled Actions
 */
@Entity('ir_cron_progress')
export class IrCronProgress {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Cron
   */
  @Column({
    type: 'int'
  })
  cron_id: number;

  // @ManyToOne(() => Cron)
  // @JoinColumn({ name: 'cron_id' })
  // cron: Cron;

  /**
   * Remaining
   */
  @Column({
    type: 'int'
  })
  remaining: number;

  /**
   * Done
   */
  @Column({
    type: 'int'
  })
  done: number;

  /**
   * Timed Out Counter
   */
  @Column({
    type: 'int'
  })
  timed_out_counter: number;

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
   * Deactivate
   */
  @Column({
    type: 'boolean'
  })
  deactivate: boolean;

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