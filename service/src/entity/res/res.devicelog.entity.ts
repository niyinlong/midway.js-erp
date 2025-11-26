import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Device Log
 */
@Entity('res_device_log')
export class ResDeviceLog {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Session Identifier
   */
  @Column({
    type: 'varchar'
  })
  session_identifier: string;

  // @ManyToOne(() => Sessionentifier)
  // @JoinColumn({ name: 'session_identifier' })
  // sessionentifier: Sessionentifier;

  /**
   * Platform
   */
  @Column({
    type: 'varchar'
  })
  platform: string;

  /**
   * Browser
   */
  @Column({
    type: 'varchar'
  })
  browser: string;

  /**
   * IP Address
   */
  @Column({
    type: 'varchar'
  })
  ip_address: string;

  /**
   * Country
   */
  @Column({
    type: 'varchar'
  })
  country: string;

  /**
   * City
   */
  @Column({
    type: 'varchar'
  })
  city: string;

  /**
   * Device Type
   */
  @Column({
    type: 'varchar'
  })
  device_type: string;

  /**
   * Revoked
   */
  @Column({
    type: 'boolean'
  })
  revoked: boolean;

  /**
   * First Activity
   */
  @Column({
    type: 'datetime'
  })
  first_activity: Date;

  /**
   * Last Activity
   */
  @Column({
    type: 'datetime'
  })
  last_activity: Date;

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