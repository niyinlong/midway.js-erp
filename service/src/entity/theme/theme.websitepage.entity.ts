import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Website Theme Page
 */
@Entity('theme_website_page')
export class ThemeWebsitePage {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * View
   */
  @Column({
    type: 'int'
  })
  view_id: number;

  // @ManyToOne(() => View)
  // @JoinColumn({ name: 'view_id' })
  // view: View;

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
   * Header Color
   */
  @Column({
    type: 'varchar'
  })
  header_color: string;

  /**
   * Header Text Color
   */
  @Column({
    type: 'varchar'
  })
  header_text_color: string;

  /**
   * Url
   */
  @Column({
    type: 'varchar'
  })
  url: string;

  /**
   * Header Visible
   */
  @Column({
    type: 'boolean'
  })
  header_visible: boolean;

  /**
   * Footer Visible
   */
  @Column({
    type: 'boolean'
  })
  footer_visible: boolean;

  /**
   * Header Overlay
   */
  @Column({
    type: 'boolean'
  })
  header_overlay: boolean;

  /**
   * Page Indexed
   */
  @Column({
    type: 'boolean'
  })
  website_indexed: boolean;

  /**
   * Is Published
   */
  @Column({
    type: 'boolean'
  })
  is_published: boolean;

  /**
   * New Page Template
   */
  @Column({
    type: 'boolean'
  })
  is_new_page_template: boolean;

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