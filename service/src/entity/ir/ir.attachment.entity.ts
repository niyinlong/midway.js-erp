import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Attachment
 */
@Entity('ir_attachment')
export class IrAttachment {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Resource ID
   */
  @Column({
    type: 'int'
  })
  res_id: number;

  // @ManyToOne(() => Res)
  // @JoinColumn({ name: 'res_id' })
  // res: Res;

  /**
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  /**
   * File Size
   */
  @Column({
    type: 'int'
  })
  file_size: number;

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
   * Resource Model
   */
  @Column({
    type: 'varchar'
  })
  res_model: string;

  /**
   * Resource Field
   */
  @Column({
    type: 'varchar'
  })
  res_field: string;

  /**
   * Type
   */
  @Column({
    type: 'varchar'
  })
  type: string;

  /**
   * Url
   */
  @Column({
    type: 'varchar'
  })
  url: string;

  /**
   * Access Token
   */
  @Column({
    type: 'varchar'
  })
  access_token: string;

  /**
   * Stored Filename
   */
  @Column({
    type: 'varchar'
  })
  store_fname: string;

  /**
   * Checksum/SHA1
   */
  @Column({
    type: 'varchar'
  })
  checksum: string;

  /**
   * Mime Type
   */
  @Column({
    type: 'varchar'
  })
  mimetype: string;

  /**
   * Description
   */
  @Column({
    type: 'varchar'
  })
  description: string;

  /**
   * Indexed Content
   */
  @Column({
    type: 'varchar'
  })
  index_content: string;

  /**
   * Is public document
   */
  @Column({
    type: 'boolean'
  })
  public: boolean;

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
   * Database Data
   */
  @Column({
    type: 'bytea'
  })
  db_datas: Buffer;

  /**
   * Original (unoptimized, unresized) attachment
   */
  @Column({
    type: 'int'
  })
  original_id: number;

  // @ManyToOne(() => Original)
  // @JoinColumn({ name: 'original_id' })
  // original: Original;

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
   * Key
   */
  @Column({
    type: 'varchar'
  })
  key: string;

}