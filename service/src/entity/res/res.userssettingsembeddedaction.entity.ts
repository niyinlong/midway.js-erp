import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * User Settings for Embedded Actions
 */
@Entity('res_users_settings_embedded_action')
export class ResUsersSettingsEmbeddedAction {
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
   * Action
   */
  @Column({
    type: 'int'
  })
  action_id: number;

  // @ManyToOne(() => Action)
  // @JoinColumn({ name: 'action_id' })
  // action: Action;

  /**
   * Res
   */
  @Column({
    type: 'int'
  })
  res_id: number;

  // @ManyToOne(() => Res)
  // @JoinColumn({ name: 'res_id' })
  // res: Res;

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
   * Res Model
   */
  @Column({
    type: 'varchar'
  })
  res_model: string;

  /**
   * List order of embedded action ids
   */
  @Column({
    type: 'varchar'
  })
  embedded_actions_order: string;

  /**
   * List visibility of embedded actions ids
   */
  @Column({
    type: 'varchar'
  })
  embedded_actions_visibility: string;

  /**
   * Is top bar visible
   */
  @Column({
    type: 'boolean'
  })
  embedded_visibility: boolean;

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