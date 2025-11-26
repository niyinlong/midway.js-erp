import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mail_activity_plan_template AND mail_activity_type
 */
@Entity('mail_activity_plan_template_mail_activity_type_rel')
export class MailActivityPlanTemplateMailActivityTypeRel {
  @Column({
    type: 'int'
  })
  mail_activity_plan_template_id: number;

  // @ManyToOne(() => MailActivityPlanTemplate)
  // @JoinColumn({ name: 'mail_activity_plan_template_id' })
  // mail_activity_plan_template: MailActivityPlanTemplate;

  @Column({
    type: 'int'
  })
  mail_activity_type_id: number;

  // @ManyToOne(() => MailActivityType)
  // @JoinColumn({ name: 'mail_activity_type_id' })
  // mail_activity_type: MailActivityType;

}