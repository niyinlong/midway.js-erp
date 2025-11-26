import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Model Page
 */
@Entity('website_controller_page')
export class WebsiteControllerPage {
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
   * Listing view
   */
  @Column({
    type: 'int'
  })
  view_id: number;

  // @ManyToOne(() => View)
  // @JoinColumn({ name: 'view_id' })
  // view: View;

  /**
   * Record view
   */
  @Column({
    type: 'int'
  })
  record_view_id: number;

  // @ManyToOne(() => RecordView)
  // @JoinColumn({ name: 'record_view_id' })
  // record_view: RecordView;

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
   * The name is used to generate the URL and is shown in the browser title bar
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * URL
   */
  @Column({
    type: 'varchar'
  })
  name_slugified: string;

  /**
   * Domain
   */
  @Column({
    type: 'varchar'
  })
  record_domain: string;

  /**
   * Default Layout
   */
  @Column({
    type: 'varchar'
  })
  default_layout: string;

  /**
   * Is Published
   */
  @Column({
    type: 'boolean'
  })
  is_published: boolean;

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