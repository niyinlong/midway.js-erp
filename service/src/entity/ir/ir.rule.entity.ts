import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Record Rule
 */
@Entity('ir_rule')
export class IrRule {
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
   * Domain
   */
  @Column({
    type: 'varchar'
  })
  domain_force: string;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Read
   */
  @Column({
    type: 'boolean'
  })
  perm_read: boolean;

  /**
   * Write
   */
  @Column({
    type: 'boolean'
  })
  perm_write: boolean;

  /**
   * Create
   */
  @Column({
    type: 'boolean'
  })
  perm_create: boolean;

  /**
   * Delete
   */
  @Column({
    type: 'boolean'
  })
  perm_unlink: boolean;

  /**
   * Global
   */
  @Column({
    type: 'boolean'
  })
  global: boolean;

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

}