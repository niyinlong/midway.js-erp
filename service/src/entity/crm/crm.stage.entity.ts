import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * CRM Stages
 */
@Entity('crm_stage')
export class CrmStage {
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
   * Days to rot
   */
  @Column({
    type: 'int'
  })
  rotting_threshold_days: number;

  /**
   * Color
   */
  @Column({
    type: 'int'
  })
  color: number;

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
   * Stage Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Requirements
   */
  @Column({
    type: 'varchar'
  })
  requirements: string;

  /**
   * Is Won Stage?
   */
  @Column({
    type: 'boolean'
  })
  is_won: boolean;

  /**
   * Folded in Pipeline
   */
  @Column({
    type: 'boolean'
  })
  fold: boolean;

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