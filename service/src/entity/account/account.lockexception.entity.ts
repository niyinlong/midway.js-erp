import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Account Lock Exception
 */
@Entity('account_lock_exception')
export class AccountLockException {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

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
   * Reason
   */
  @Column({
    type: 'varchar'
  })
  reason: string;

  /**
   * Lock Date Field
   */
  @Column({
    type: 'varchar'
  })
  lock_date_field: string;

  /**
   * Changed Lock Date
   */
  @Column({
    type: 'datetime'
  })
  lock_date: Date;

  /**
   * Original Lock Date
   */
  @Column({
    type: 'datetime'
  })
  company_lock_date: Date;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * End Date
   */
  @Column({
    type: 'datetime'
  })
  end_datetime: Date;

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