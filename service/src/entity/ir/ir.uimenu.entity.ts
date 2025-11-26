import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Menu
 */
@Entity('ir_ui_menu')
export class IrUiMenu {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Parent Menu
   */
  @Column({
    type: 'int'
  })
  parent_id: number;

  // @ManyToOne(() => Parent)
  // @JoinColumn({ name: 'parent_id' })
  // parent: Parent;

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
   * Parent Path
   */
  @Column({
    type: 'varchar'
  })
  parent_path: string;

  /**
   * Web Icon File
   */
  @Column({
    type: 'varchar'
  })
  web_icon: string;

  /**
   * Action
   */
  @Column({
    type: 'varchar'
  })
  action: string;

  /**
   * Menu
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

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