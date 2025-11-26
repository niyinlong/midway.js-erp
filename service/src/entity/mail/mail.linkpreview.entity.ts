import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Store link preview data
 */
@Entity('mail_link_preview')
export class MailLinkPreview {
  @PrimaryGeneratedColumn()
  id: number;

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
   * URL
   */
  @Column({
    type: 'varchar'
  })
  source_url: string;

  /**
   * Type
   */
  @Column({
    type: 'varchar'
  })
  og_type: string;

  /**
   * Title
   */
  @Column({
    type: 'varchar'
  })
  og_title: string;

  /**
   * Site name
   */
  @Column({
    type: 'varchar'
  })
  og_site_name: string;

  /**
   * Image
   */
  @Column({
    type: 'varchar'
  })
  og_image: string;

  /**
   * MIME type
   */
  @Column({
    type: 'varchar'
  })
  og_mimetype: string;

  /**
   * Image MIME type
   */
  @Column({
    type: 'varchar'
  })
  image_mimetype: string;

  /**
   * Description
   */
  @Column({
    type: 'varchar'
  })
  og_description: string;

  /**
   * Create Date
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