import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * API Key Description
 */
@Entity('res_users_apikeys_description')
export class ResUsersApikeysDescription {
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
   * Description
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Duration
   */
  @Column({
    type: 'varchar'
  })
  duration: string;

  /**
   * Expiration Date
   */
  @Column({
    type: 'datetime'
  })
  expiration_date: Date;

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