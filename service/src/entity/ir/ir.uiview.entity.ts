import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * View
 */
@Entity('ir_ui_view')
export class IrUiView {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  priority: number;

  /**
   * Inherited View
   */
  @Column({
    type: 'int'
  })
  inherit_id: number;

  // @ManyToOne(() => Inherit)
  // @JoinColumn({ name: 'inherit_id' })
  // inherit: Inherit;

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
   * View Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Model
   */
  @Column({
    type: 'varchar'
  })
  model: string;

  /**
   * Key
   */
  @Column({
    type: 'varchar'
  })
  key: string;

  /**
   * View Type
   */
  @Column({
    type: 'varchar'
  })
  type: string;

  /**
   * Arch Filename
   */
  @Column({
    type: 'varchar'
  })
  arch_fs: string;

  /**
   * View inheritance mode
   */
  @Column({
    type: 'varchar'
  })
  mode: string;

  /**
   * Arch Blob
   */
  @Column({
    type: 'jsonb'
  })
  arch_db: object;

  /**
   * Previous View Architecture
   */
  @Column({
    type: 'varchar'
  })
  arch_prev: string;

  /**
   * Modified Architecture
   */
  @Column({
    type: 'boolean'
  })
  arch_updated: boolean;

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

  /**
   * Show As Optional Inherit
   */
  @Column({
    type: 'boolean'
  })
  customize_show: boolean;

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
   * Website opengraph image
   */
  @Column({
    type: 'varchar'
  })
  website_meta_og_img: string;

  /**
   * Visibility
   */
  @Column({
    type: 'varchar'
  })
  visibility: string;

  /**
   * Visibility Password
   */
  @Column({
    type: 'varchar'
  })
  visibility_password: string;

  /**
   * Website meta title
   */
  @Column({
    type: 'jsonb'
  })
  website_meta_title: object;

  /**
   * Website meta description
   */
  @Column({
    type: 'jsonb'
  })
  website_meta_description: object;

  /**
   * Website meta keywords
   */
  @Column({
    type: 'jsonb'
  })
  website_meta_keywords: object;

  /**
   * Seo name
   */
  @Column({
    type: 'jsonb'
  })
  seo_name: object;

  /**
   * SEO optimized
   */
  @Column({
    type: 'boolean'
  })
  is_seo_optimized: boolean;

  /**
   * Track
   */
  @Column({
    type: 'boolean'
  })
  track: boolean;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}