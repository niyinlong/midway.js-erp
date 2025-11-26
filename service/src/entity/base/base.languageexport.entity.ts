import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Language Export
 */
@Entity('base_language_export')
export class BaseLanguageExport {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Model to Export
   */
  @Column({
    type: 'int'
  })
  model_id: number;

  // @ManyToOne(() => Model)
  // @JoinColumn({ name: 'model_id' })
  // model: Model;

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
   * File Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Language
   */
  @Column({
    type: 'varchar'
  })
  lang: string;

  /**
   * File Format
   */
  @Column({
    type: 'varchar'
  })
  format: string;

  /**
   * Export Type
   */
  @Column({
    type: 'varchar'
  })
  export_type: string;

  /**
   * Model Domain
   */
  @Column({
    type: 'varchar'
  })
  domain: string;

  /**
   * State
   */
  @Column({
    type: 'varchar'
  })
  state: string;

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