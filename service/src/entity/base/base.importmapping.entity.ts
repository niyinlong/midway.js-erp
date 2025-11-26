import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Base Import Mapping
 */
@Entity('base_import_mapping')
export class BaseImportMapping {
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
   * Res Model
   */
  @Column({
    type: 'varchar'
  })
  res_model: string;

  /**
   * Column Name
   */
  @Column({
    type: 'varchar'
  })
  column_name: string;

  /**
   * Field Name
   */
  @Column({
    type: 'varchar'
  })
  field_name: string;

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