import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mail_activity_schedule AND mail_activity_plan
 */
@Entity('mail_activity_plan_mail_activity_schedule_rel')
export class MailActivityPlanMailActivityScheduleRel {
  @Column({
    type: 'int'
  })
  mail_activity_schedule_id: number;

  // @ManyToOne(() => MailActivitySchedule)
  // @JoinColumn({ name: 'mail_activity_schedule_id' })
  // mail_activity_schedule: MailActivitySchedule;

  @Column({
    type: 'int'
  })
  mail_activity_plan_id: number;

  // @ManyToOne(() => MailActivityPlan)
  // @JoinColumn({ name: 'mail_activity_plan_id' })
  // mail_activity_plan: MailActivityPlan;

}