import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Privacy Log
 */
@Entity('privacy_log')
export class PrivacyLog {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Handled By
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
   * Anonymized Name
   */
  @Column({
    type: 'varchar'
  })
  anonymized_name: string;

  /**
   * Anonymized Email
   */
  @Column({
    type: 'varchar'
  })
  anonymized_email: string;

  /**
   * Execution Details
   */
  @Column({
    type: 'varchar'
  })
  execution_details: string;

  /**
   * Found Records
   */
  @Column({
    type: 'varchar'
  })
  records_description: string;

  /**
   * Additional Note
   */
  @Column({
    type: 'varchar'
  })
  additional_note: string;

  /**
   * Date
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

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