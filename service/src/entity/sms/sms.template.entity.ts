import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * SMS Templates
 */
@Entity('sms_template')
export class SmsTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Applies to
   */
  @Column({
    type: 'int'
  })
  model_id: number;

  // @ManyToOne(() => Model)
  // @JoinColumn({ name: 'model_id' })
  // model: Model;

  /**
   * Sidebar action
   */
  @Column({
    type: 'int'
  })
  sidebar_action_id: number;

  // @ManyToOne(() => SidebarAction)
  // @JoinColumn({ name: 'sidebar_action_id' })
  // sidebar_action: SidebarAction;

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
   * Template Filename
   */
  @Column({
    type: 'varchar'
  })
  template_fs: string;

  /**
   * Language
   */
  @Column({
    type: 'varchar'
  })
  lang: string;

  /**
   * Related Document Model
   */
  @Column({
    type: 'varchar'
  })
  model: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Body
   */
  @Column({
    type: 'jsonb'
  })
  body: object;

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