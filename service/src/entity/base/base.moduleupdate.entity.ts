import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Update Module
 */
@Entity('base_module_update')
export class BaseModuleUpdate {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Number of modules updated
   */
  @Column({
    type: 'int'
  })
  updated: number;

  /**
   * Number of modules added
   */
  @Column({
    type: 'int'
  })
  added: number;

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