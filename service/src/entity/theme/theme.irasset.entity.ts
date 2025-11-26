import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Theme Asset
 */
@Entity('theme_ir_asset')
export class ThemeIrAsset {
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
   * Key
   */
  @Column({
    type: 'varchar'
  })
  key: string;

  /**
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Bundle
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
   * Path
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

}