import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * 2-Factor Setup Wizard
 */
@Entity('auth_totp_wizard')
export class AuthTotpWizard {
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
   * Secret
   */
  @Column({
    type: 'varchar'
  })
  secret: string;

  /**
   * Url
   */
  @Column({
    type: 'varchar'
  })
  url: string;

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

  /**
   * Qrcode
   */
  @Column({
    type: 'bytea'
  })
  qrcode: Buffer;

}