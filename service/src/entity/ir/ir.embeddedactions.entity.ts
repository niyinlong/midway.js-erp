import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Embedded Actions
 */
@Entity('ir_embedded_actions')
export class IrEmbeddedActions {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Parent Action
   */
  @Column({
    type: 'int'
  })
  parent_action_id: number;

  // @ManyToOne(() => ParentAction)
  // @JoinColumn({ name: 'parent_action_id' })
  // parent_action: ParentAction;

  /**
   * Active Parent Id
   */
  @Column({
    type: 'int'
  })
  parent_res_id: number;

  // @ManyToOne(() => ParentRes)
  // @JoinColumn({ name: 'parent_res_id' })
  // parent_res: ParentRes;

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
   * User
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

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
   * Active Parent Model
   */
  @Column({
    type: 'varchar'
  })
  parent_res_model: string;

  /**
   * Python Method
   */
  @Column({
    type: 'varchar'
  })
  python_method: string;

  /**
   * Default View
   */
  @Column({
    type: 'varchar'
  })
  default_view_mode: string;

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
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

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