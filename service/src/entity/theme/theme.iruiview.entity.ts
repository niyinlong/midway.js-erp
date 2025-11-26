import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Theme UI View
 */
@Entity('theme_ir_ui_view')
export class ThemeIrUiView {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Priority
   */
  @Column({
    type: 'int'
  })
  priority: number;

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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Key
   */
  @Column({
    type: 'varchar'
  })
  key: string;

  /**
   * Type
   */
  @Column({
    type: 'varchar'
  })
  type: string;

  /**
   * Mode
   */
  @Column({
    type: 'varchar'
  })
  mode: string;

  /**
   * Arch Fs
   */
  @Column({
    type: 'varchar'
  })
  arch_fs: string;

  /**
   * Inherit
   */
  @Column({
    type: 'varchar'
  })
  inherit_id: string;

  // @ManyToOne(() => Inherit)
  // @JoinColumn({ name: 'inherit_id' })
  // inherit: Inherit;

  /**
   * Arch
   */
  @Column({
    type: 'jsonb'
  })
  arch: object;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Customize Show
   */
  @Column({
    type: 'boolean'
  })
  customize_show: boolean;

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