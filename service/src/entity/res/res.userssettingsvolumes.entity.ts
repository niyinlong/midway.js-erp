import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * User Settings Volumes
 */
@Entity('res_users_settings_volumes')
export class ResUsersSettingsVolumes {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * User Setting
   */
  @Column({
    type: 'int'
  })
  user_setting_id: number;

  // @ManyToOne(() => UserSetting)
  // @JoinColumn({ name: 'user_setting_id' })
  // user_setting: UserSetting;

  /**
   * Partner
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * Guest
   */
  @Column({
    type: 'int'
  })
  guest_id: number;

  // @ManyToOne(() => Guest)
  // @JoinColumn({ name: 'guest_id' })
  // guest: Guest;

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
   * Volume
   */
  @Column({
    type: 'varchar'
  })
  volume: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}