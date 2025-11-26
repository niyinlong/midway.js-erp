import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Remove phone from blacklist
 */
@Entity('phone_blacklist_remove')
export class PhoneBlacklistRemove {
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
   * Phone Number
   */
  @Column({
    type: 'varchar'
  })
  phone: string;

  /**
   * Reason
   */
  @Column({
    type: 'varchar'
  })
  reason: string;

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