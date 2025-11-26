import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Privacy Lookup Wizard
 */
@Entity('privacy_lookup_wizard')
export class PrivacyLookupWizard {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Log
   */
  @Column({
    type: 'int'
  })
  log_id: number;

  // @ManyToOne(() => Log)
  // @JoinColumn({ name: 'log_id' })
  // log: Log;

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
  name: string;

  /**
   * Email
   */
  @Column({
    type: 'varchar'
  })
  email: string;

  /**
   * Execution Details
   */
  @Column({
    type: 'varchar'
  })
  execution_details: string;

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