import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Analytic Plans
 */
@Entity('account_analytic_plan')
export class AccountAnalyticPlan {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Parent
   */
  @Column({
    type: 'int'
  })
  parent_id: number;

  // @ManyToOne(() => Parent)
  // @JoinColumn({ name: 'parent_id' })
  // parent: Parent;

  /**
   * Color
   */
  @Column({
    type: 'int'
  })
  color: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Parent Path
   */
  @Column({
    type: 'varchar'
  })
  parent_path: string;

  /**
   * Complete Name
   */
  @Column({
    type: 'varchar'
  })
  complete_name: string;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Default Applicability
   */
  @Column({
    type: 'jsonb'
  })
  default_applicability: object;

  /**
   * Description
   */
  @Column({
    type: 'varchar'
  })
  description: string;

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