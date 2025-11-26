import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Gamification Goal Definition
 */
@Entity('gamification_goal_definition')
export class GamificationGoalDefinition {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Model
   */
  @Column({
    type: 'int'
  })
  model_id: number;

  // @ManyToOne(() => Model)
  // @JoinColumn({ name: 'model_id' })
  // model: Model;

  /**
   * Field to Sum
   */
  @Column({
    type: 'int'
  })
  field_id: number;

  // @ManyToOne(() => Field)
  // @JoinColumn({ name: 'field_id' })
  // field: Field;

  /**
   * Date Field
   */
  @Column({
    type: 'int'
  })
  field_date_id: number;

  // @ManyToOne(() => FieldDate)
  // @JoinColumn({ name: 'field_date_id' })
  // field_date: FieldDate;

  /**
   * Distinctive field for batch user
   */
  @Column({
    type: 'int'
  })
  batch_distinctive_field: number;

  /**
   * Action
   */
  @Column({
    type: 'int'
  })
  action_id: number;

  // @ManyToOne(() => Action)
  // @JoinColumn({ name: 'action_id' })
  // action: Action;

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
   * Computation Mode
   */
  @Column({
    type: 'varchar'
  })
  computation_mode: string;

  /**
   * Displayed as
   */
  @Column({
    type: 'varchar'
  })
  display_mode: string;

  /**
   * Filter Domain
   */
  @Column({
    type: 'varchar'
  })
  domain: string;

  /**
   * Evaluated expression for batch mode
   */
  @Column({
    type: 'varchar'
  })
  batch_user_expression: string;

  /**
   * Goal Performance
   */
  @Column({
    type: 'varchar'
  })
  condition: string;

  /**
   * ID Field of user
   */
  @Column({
    type: 'varchar'
  })
  res_id_field: string;

  // @ManyToOne(() => ResField)
  // @JoinColumn({ name: 'res_id_field' })
  // res_field: ResField;

  /**
   * Goal Definition
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Suffix
   */
  @Column({
    type: 'jsonb'
  })
  suffix: object;

  /**
   * Goal Description
   */
  @Column({
    type: 'varchar'
  })
  description: string;

  /**
   * Python Code
   */
  @Column({
    type: 'varchar'
  })
  compute_code: string;

  /**
   * Monetary Value
   */
  @Column({
    type: 'boolean'
  })
  monetary: boolean;

  /**
   * Batch Mode
   */
  @Column({
    type: 'boolean'
  })
  batch_mode: boolean;

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