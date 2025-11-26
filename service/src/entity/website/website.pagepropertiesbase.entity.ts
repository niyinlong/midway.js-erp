import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Page Properties Base
 */
@Entity('website_page_properties_base')
export class WebsitePagePropertiesBase {
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
   * Target Model
   */
  @Column({
    type: 'varchar'
  })
  target_model_id: string;

  // @ManyToOne(() => TargetModel)
  // @JoinColumn({ name: 'target_model_id' })
  // target_model: TargetModel;

  /**
   * Url
   */
  @Column({
    type: 'varchar'
  })
  url: string;

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