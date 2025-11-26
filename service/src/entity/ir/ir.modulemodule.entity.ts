import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('ir_module_module')
export class IrModuleModule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int'
  })
  create_uid: number;

  @Column({
    type: 'datetime'
  })
  create_date: Date;

  @Column({
    type: 'datetime'
  })
  write_date: Date;

  @Column({
    type: 'int'
  })
  write_uid: number;

  @Column({
    type: 'varchar'
  })
  website: string;

  @Column({
    type: 'jsonb'
  })
  summary: object;

  @Column({
    type: 'varchar'
  })
  name: string;

  @Column({
    type: 'varchar'
  })
  author: string;

  @Column({
    type: 'varchar'
  })
  icon: string;

  @Column({
    type: 'varchar'
  })
  state: string;

  @Column({
    type: 'varchar'
  })
  latest_version: string;

  @Column({
    type: 'jsonb'
  })
  shortdesc: object;

  @Column({
    type: 'int'
  })
  category_id: number;

  // @ManyToOne(() => Category)
  // @JoinColumn({ name: 'category_id' })
  // category: Category;

  @Column({
    type: 'jsonb'
  })
  description: object;

  @Column({
    type: 'boolean'
  })
  application: boolean;

  @Column({
    type: 'boolean'
  })
  demo: boolean;

  @Column({
    type: 'boolean'
  })
  web: boolean;

  @Column({
    type: 'varchar'
  })
  license: string;

  @Column({
    type: 'int'
  })
  sequence: number;

  @Column({
    type: 'boolean'
  })
  auto_install: boolean;

  @Column({
    type: 'boolean'
  })
  to_buy: boolean;

  /**
   * Maintainer
   */
  @Column({
    type: 'varchar'
  })
  maintainer: string;

  /**
   * Published Version
   */
  @Column({
    type: 'varchar'
  })
  published_version: string;

  /**
   * URL
   */
  @Column({
    type: 'varchar'
  })
  url: string;

  /**
   * Contributors
   */
  @Column({
    type: 'varchar'
  })
  contributors: string;

  /**
   * Menus
   */
  @Column({
    type: 'varchar'
  })
  menus_by_module: string;

  /**
   * Reports
   */
  @Column({
    type: 'varchar'
  })
  reports_by_module: string;

  /**
   * Views
   */
  @Column({
    type: 'varchar'
  })
  views_by_module: string;

  /**
   * Module Type
   */
  @Column({
    type: 'varchar'
  })
  module_type: string;

  /**
   * Imported Module
   */
  @Column({
    type: 'boolean'
  })
  imported: boolean;

}