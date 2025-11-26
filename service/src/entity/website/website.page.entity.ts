import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Page
 */
@Entity('website_page')
export class WebsitePage {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Page URL
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
   * Is Published
   */
  @Column({
    type: 'boolean'
  })
  is_published: boolean;

  /**
   * Is Indexed
   */
  @Column({
    type: 'boolean'
  })
  website_indexed: boolean;

  /**
   * New Page Template
   */
  @Column({
    type: 'boolean'
  })
  is_new_page_template: boolean;

  /**
   * Publishing Date
   */
  @Column({
    type: 'datetime'
  })
  date_publish: Date;

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