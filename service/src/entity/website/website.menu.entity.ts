import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Website Menu
 */
@Entity('website_menu')
export class WebsiteMenu {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Related Page
   */
  @Column({
    type: 'int'
  })
  page_id: number;

  // @ManyToOne(() => Page)
  // @JoinColumn({ name: 'page_id' })
  // page: Page;

  /**
   * Related Model Page
   */
  @Column({
    type: 'int'
  })
  controller_page_id: number;

  // @ManyToOne(() => ControllerPage)
  // @JoinColumn({ name: 'controller_page_id' })
  // controller_page: ControllerPage;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Website
   */
  @Column({
    type: 'int'
  })
  website_id: number;

  // @ManyToOne(() => Website)
  // @JoinColumn({ name: 'website_id' })
  // website: Website;

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
   * Theme Template
   */
  @Column({
    type: 'int'
  })
  theme_template_id: number;

  // @ManyToOne(() => ThemeTemplate)
  // @JoinColumn({ name: 'theme_template_id' })
  // theme_template: ThemeTemplate;

  /**
   * Url
   */
  @Column({
    type: 'varchar'
  })
  url: string;

  /**
   * Parent Path
   */
  @Column({
    type: 'varchar'
  })
  parent_path: string;

  /**
   * Mega Menu Classes
   */
  @Column({
    type: 'varchar'
  })
  mega_menu_classes: string;

  /**
   * Menu
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Mega Menu Content
   */
  @Column({
    type: 'jsonb'
  })
  mega_menu_content: object;

  /**
   * New Window
   */
  @Column({
    type: 'boolean'
  })
  new_window: boolean;

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