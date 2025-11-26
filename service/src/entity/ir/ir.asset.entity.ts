import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Asset
 */
@Entity('ir_asset')
export class IrAsset {
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
   * Bundle name
   */
  @Column({
    type: 'varchar'
  })
  bundle: string;

  /**
   * Directive
   */
  @Column({
    type: 'varchar'
  })
  directive: string;

  /**
   * Path (or glob pattern)
   */
  @Column({
    type: 'varchar'
  })
  path: string;

  /**
   * Target
   */
  @Column({
    type: 'varchar'
  })
  target: string;

  /**
   * active
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