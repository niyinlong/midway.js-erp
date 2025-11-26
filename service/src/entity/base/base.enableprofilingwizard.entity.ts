import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Enable profiling for some time
 */
@Entity('base_enable_profiling_wizard')
export class BaseEnableProfilingWizard {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Enable profiling for
   */
  @Column({
    type: 'varchar'
  })
  duration: string;

  /**
   * Enable profiling until
   */
  @Column({
    type: 'datetime'
  })
  expiration: Date;

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