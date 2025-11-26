import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Activity plan template
 */
@Entity('mail_activity_plan_template')
export class MailActivityPlanTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Plan
   */
  @Column({
    type: 'int'
  })
  plan_id: number;

  // @ManyToOne(() => Plan)
  // @JoinColumn({ name: 'plan_id' })
  // plan: Plan;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Activity Type
   */
  @Column({
    type: 'int'
  })
  activity_type_id: number;

  // @ManyToOne(() => ActivityType)
  // @JoinColumn({ name: 'activity_type_id' })
  // activity_type: ActivityType;

  /**
   * Interval
   */
  @Column({
    type: 'int'
  })
  delay_count: number;

  /**
   * Assigned to
   */
  @Column({
    type: 'int'
  })
  responsible_id: number;

  // @ManyToOne(() => Responsible)
  // @JoinColumn({ name: 'responsible_id' })
  // responsible: Responsible;

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
   * Delay units
   */
  @Column({
    type: 'varchar'
  })
  delay_unit: string;

  /**
   * Trigger
   */
  @Column({
    type: 'varchar'
  })
  delay_from: string;

  /**
   * Summary
   */
  @Column({
    type: 'varchar'
  })
  summary: string;

  /**
   * Assignment
   */
  @Column({
    type: 'varchar'
  })
  responsible_type: string;

  /**
   * Note
   */
  @Column({
    type: 'varchar'
  })
  note: string;

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