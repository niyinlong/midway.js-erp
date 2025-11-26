import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Website Configurator Feature
 */
@Entity('website_configurator_feature')
export class WebsiteConfiguratorFeature {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Page View
   */
  @Column({
    type: 'int'
  })
  page_view_id: number;

  // @ManyToOne(() => PageView)
  // @JoinColumn({ name: 'page_view_id' })
  // page_view: PageView;

  /**
   * Module
   */
  @Column({
    type: 'int'
  })
  module_id: number;

  // @ManyToOne(() => Module)
  // @JoinColumn({ name: 'module_id' })
  // module: Module;

  /**
   * Menu Sequence
   */
  @Column({
    type: 'int'
  })
  menu_sequence: number;

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
   * Icon
   */
  @Column({
    type: 'varchar'
  })
  icon: string;

  /**
   * Iap Page Code
   */
  @Column({
    type: 'varchar'
  })
  iap_page_code: string;

  /**
   * Website Config Preselection
   */
  @Column({
    type: 'varchar'
  })
  website_config_preselection: string;

  /**
   * Feature Url
   */
  @Column({
    type: 'varchar'
  })
  feature_url: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Description
   */
  @Column({
    type: 'jsonb'
  })
  description: object;

  /**
   * Menu Company
   */
  @Column({
    type: 'boolean'
  })
  menu_company: boolean;

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