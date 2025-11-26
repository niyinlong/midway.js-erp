import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Phone Blacklist
 */
@Entity('phone_blacklist')
export class PhoneBlacklist {
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
  number: string;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

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