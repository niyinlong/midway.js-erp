import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Triggered actions
 */
@Entity('ir_cron_trigger')
export class IrCronTrigger {
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
   * Call At
   */
  @Column({
    type: 'datetime'
  })
  call_at: Date;

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