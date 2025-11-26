import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Users Deletion Request
 */
@Entity('res_users_deletion')
export class ResUsersDeletion {
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
   * User Id
   */
  @Column({
    type: 'int'
  })
  user_id_int: number;

  // @ManyToOne(() => UserInt)
  // @JoinColumn({ name: 'user_id_int' })
  // user_int: UserInt;

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
   * State
   */
  @Column({
    type: 'varchar'
  })
  state: string;

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