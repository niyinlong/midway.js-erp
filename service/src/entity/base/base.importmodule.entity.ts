import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Import Module
 */
@Entity('base_import_module')
export class BaseImportModule {
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
   * Status
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Import Message
   */
  @Column({
    type: 'varchar'
  })
  import_message: string;

  /**
   * Modules Dependencies
   */
  @Column({
    type: 'varchar'
  })
  modules_dependencies: string;

  /**
   * Force init
   */
  @Column({
    type: 'boolean'
  })
  force: boolean;

  /**
   * Import demo data of module
   */
  @Column({
    type: 'boolean'
  })
  with_demo: boolean;

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
   * Module .ZIP file
   */
  @Column({
    type: 'bytea'
  })
  module_file: Buffer;

}