import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Model Constraint
 */
@Entity('ir_model_constraint')
export class IrModelConstraint {
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
   * Constraint
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Definition
   */
  @Column({
    type: 'varchar'
  })
  definition: string;

  /**
   * Constraint Type
   */
  @Column({
    type: 'varchar'
  })
  type: string;

  /**
   * Message
   */
  @Column({
    type: 'jsonb'
  })
  message: object;

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