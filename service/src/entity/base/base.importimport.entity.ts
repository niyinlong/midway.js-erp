import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Base Import
 */
@Entity('base_import_import')
export class BaseImportImport {
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
   * Model
   */
  @Column({
    type: 'varchar'
  })
  res_model: string;

  /**
   * File Name
   */
  @Column({
    type: 'varchar'
  })
  file_name: string;

  /**
   * File Type
   */
  @Column({
    type: 'varchar'
  })
  file_type: string;

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
  file: Buffer;

}