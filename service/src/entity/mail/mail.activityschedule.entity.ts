import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Activity schedule plan Wizard
 */
@Entity('mail_activity_schedule')
export class MailActivitySchedule {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Applies to
   */
  @Column({
    type: 'int'
  })
  res_model_id: number;

  // @ManyToOne(() => ResModel)
  // @JoinColumn({ name: 'res_model_id' })
  // res_model: ResModel;

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
   * Assigned To
   */
  @Column({
    type: 'int'
  })
  plan_on_demand_user_id: number;

  // @ManyToOne(() => PlanOnDemandUser)
  // @JoinColumn({ name: 'plan_on_demand_user_id' })
  // plan_on_demand_user: PlanOnDemandUser;

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
   * Assigned to
   */
  @Column({
    type: 'int'
  })
  activity_user_id: number;

  // @ManyToOne(() => ActivityUser)
  // @JoinColumn({ name: 'activity_user_id' })
  // activity_user: ActivityUser;

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
   * Model
   */
  @Column({
    type: 'varchar'
  })
  res_model: string;

  /**
   * Summary
   */
  @Column({
    type: 'varchar'
  })
  summary: string;

  /**
   * Plan Date
   */
  @Column({
    type: 'datetime'
  })
  plan_date: Date;

  /**
   * Due Date
   */
  @Column({
    type: 'datetime'
  })
  date_deadline: Date;

  /**
   * Document IDs
   */
  @Column({
    type: 'varchar'
  })
  res_ids: string;

  // @ManyToOne(() => Ress)
  // @JoinColumn({ name: 'res_ids' })
  // ress: Ress;

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