import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Relation Model
 */
@Entity('ir_model_relation')
export class IrModelRelation {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Model
   */
  @Column({
    type: 'int'
  })
  model: number;

  /**
   * Module
   */
  @Column({
    type: 'int'
  })
  module: number;

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
   * Relation Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Write Date
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

  /**
   * Create Date
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

}