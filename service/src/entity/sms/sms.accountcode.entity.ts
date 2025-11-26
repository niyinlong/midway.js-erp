import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * SMS Account Verification Code Wizard
 */
@Entity('sms_account_code')
export class SmsAccountCode {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Account
   */
  @Column({
    type: 'int'
  })
  account_id: number;

  // @ManyToOne(() => Account)
  // @JoinColumn({ name: 'account_id' })
  // account: Account;

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
   * Verification Code
   */
  @Column({
    type: 'varchar'
  })
  verification_code: string;

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