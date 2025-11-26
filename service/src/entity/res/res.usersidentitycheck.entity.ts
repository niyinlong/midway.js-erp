import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Password Check Wizard
 */
@Entity('res_users_identitycheck')
export class ResUsersIdentitycheck {
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
   * Request
   */
  @Column({
    type: 'varchar'
  })
  request: string;

  /**
   * Auth Method
   */
  @Column({
    type: 'varchar'
  })
  auth_method: string;

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