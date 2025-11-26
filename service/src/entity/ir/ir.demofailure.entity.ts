import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Demo failure
 */
@Entity('ir_demo_failure')
export class IrDemoFailure {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Module
   */
  @Column({
    type: 'int'
  })
  module_id: number;

  // @ManyToOne(() => Module)
  // @JoinColumn({ name: 'module_id' })
  // module: Module;

  /**
   * Wizard
   */
  @Column({
    type: 'int'
  })
  wizard_id: number;

  // @ManyToOne(() => Wizard)
  // @JoinColumn({ name: 'wizard_id' })
  // wizard: Wizard;

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
   * Error
   */
  @Column({
    type: 'varchar'
  })
  error: string;

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