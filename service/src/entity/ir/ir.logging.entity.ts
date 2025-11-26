import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Logging
 */
@Entity('ir_logging')
export class IrLogging {
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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Type
   */
  @Column({
    type: 'varchar'
  })
  type: string;

  /**
   * Database Name
   */
  @Column({
    type: 'varchar'
  })
  dbname: string;

  /**
   * Level
   */
  @Column({
    type: 'varchar'
  })
  level: string;

  /**
   * Path
   */
  @Column({
    type: 'varchar'
  })
  path: string;

  /**
   * Function
   */
  @Column({
    type: 'varchar'
  })
  func: string;

  /**
   * Line
   */
  @Column({
    type: 'varchar'
  })
  line: string;

  /**
   * Message
   */
  @Column({
    type: 'varchar'
  })
  message: string;

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