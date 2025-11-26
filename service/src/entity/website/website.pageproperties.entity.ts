import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Page Properties
 */
@Entity('website_page_properties')
export class WebsitePageProperties {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Target Model
   */
  @Column({
    type: 'int'
  })
  target_model_id: number;

  // @ManyToOne(() => TargetModel)
  // @JoinColumn({ name: 'target_model_id' })
  // target_model: TargetModel;

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
   * Old Url
   */
  @Column({
    type: 'varchar'
  })
  old_url: string;

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