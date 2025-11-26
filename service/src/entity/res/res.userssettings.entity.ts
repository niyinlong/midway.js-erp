import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * User Settings
 */
@Entity('res_users_settings')
export class ResUsersSettings {
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
   * Duration of voice activity in ms
   */
  @Column({
    type: 'int'
  })
  voice_active_duration: number;

  /**
   * Push-To-Talk shortcut
   */
  @Column({
    type: 'varchar'
  })
  push_to_talk_key: string;

  /**
   * Channel Notifications
   */
  @Column({
    type: 'varchar'
  })
  channel_notifications: string;

  /**
   * Is discuss sidebar category channel open?
   */
  @Column({
    type: 'boolean'
  })
  is_discuss_sidebar_category_channel_open: boolean;

  /**
   * Is discuss sidebar category chat open?
   */
  @Column({
    type: 'boolean'
  })
  is_discuss_sidebar_category_chat_open: boolean;

  /**
   * Use the push to talk feature
   */
  @Column({
    type: 'boolean'
  })
  use_push_to_talk: boolean;

  /**
   * Calendar Default Privacy
   */
  @Column({
    type: 'varchar'
  })
  calendar_default_privacy: string;

}