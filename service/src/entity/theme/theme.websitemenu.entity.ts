import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Website Theme Menu
 */
@Entity('theme_website_menu')
export class ThemeWebsiteMenu {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Page
   */
  @Column({
    type: 'int'
  })
  page_id: number;

  // @ManyToOne(() => Page)
  // @JoinColumn({ name: 'page_id' })
  // page: Page;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Parent
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
   * Url
   */
  @Column({
    type: 'varchar'
  })
  url: string;

  /**
   * Mega Menu Classes
   */
  @Column({
    type: 'varchar'
  })
  mega_menu_classes: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Mega Menu Content
   */
  @Column({
    type: 'varchar'
  })
  mega_menu_content: string;

  /**
   * New Window
   */
  @Column({
    type: 'boolean'
  })
  new_window: boolean;

  /**
   * Use Main Menu As Parent
   */
  @Column({
    type: 'boolean'
  })
  use_main_menu_as_parent: boolean;

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