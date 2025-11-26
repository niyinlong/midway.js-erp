import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * User, change own password wizard
 */
@Entity('change_password_own')
export class ChangePasswordOwn {
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
   * New Password
   */
  @Column({
    type: 'varchar'
  })
  new_password: string;

  /**
   * New Password (Confirmation)
   */
  @Column({
    type: 'varchar'
  })
  confirm_password: string;

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