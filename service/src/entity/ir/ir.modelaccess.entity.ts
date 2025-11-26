import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Model Access
 */
@Entity('ir_model_access')
export class IrModelAccess {
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
   * Group
   */
  @Column({
    type: 'int'
  })
  group_id: number;

  // @ManyToOne(() => Group)
  // @JoinColumn({ name: 'group_id' })
  // group: Group;

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
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Read Access
   */
  @Column({
    type: 'boolean'
  })
  perm_read: boolean;

  /**
   * Write Access
   */
  @Column({
    type: 'boolean'
  })
  perm_write: boolean;

  /**
   * Create Access
   */
  @Column({
    type: 'boolean'
  })
  perm_create: boolean;

  /**
   * Delete Access
   */
  @Column({
    type: 'boolean'
  })
  perm_unlink: boolean;

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