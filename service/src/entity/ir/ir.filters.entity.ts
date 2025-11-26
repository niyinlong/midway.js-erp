import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Filters
 */
@Entity('ir_filters')
export class IrFilters {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Embedded Action
   */
  @Column({
    type: 'int'
  })
  embedded_action_id: number;

  // @ManyToOne(() => EmbeddedAction)
  // @JoinColumn({ name: 'embedded_action_id' })
  // embedded_action: EmbeddedAction;

  /**
   * Embedded Parent Res
   */
  @Column({
    type: 'int'
  })
  embedded_parent_res_id: number;

  // @ManyToOne(() => EmbeddedParentRes)
  // @JoinColumn({ name: 'embedded_parent_res_id' })
  // embedded_parent_res: EmbeddedParentRes;

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
   * Filter Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Sort
   */
  @Column({
    type: 'varchar'
  })
  sort: string;

  /**
   * Model
   */
  @Column({
    type: 'varchar'
  })
  model_id: string;

  // @ManyToOne(() => Model)
  // @JoinColumn({ name: 'model_id' })
  // model: Model;

  /**
   * Domain
   */
  @Column({
    type: 'varchar'
  })
  domain: string;

  /**
   * Context
   */
  @Column({
    type: 'varchar'
  })
  context: string;

  /**
   * Default Filter
   */
  @Column({
    type: 'boolean'
  })
  is_default: boolean;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

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

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}