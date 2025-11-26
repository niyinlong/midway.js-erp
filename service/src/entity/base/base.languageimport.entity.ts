import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Language Import
 */
@Entity('base_language_import')
export class BaseLanguageImport {
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
   * Language Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * ISO Code
   */
  @Column({
    type: 'varchar'
  })
  code: string;

  /**
   * File Name
   */
  @Column({
    type: 'varchar'
  })
  filename: string;

  /**
   * Overwrite Existing Terms
   */
  @Column({
    type: 'boolean'
  })
  overwrite: boolean;

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
   * File
   */
  @Column({
    type: 'bytea'
  })
  data: Buffer;

}