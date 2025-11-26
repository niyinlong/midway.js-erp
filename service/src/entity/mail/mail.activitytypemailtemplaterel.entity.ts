import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mail_activity_type AND mail_template
 */
@Entity('mail_activity_type_mail_template_rel')
export class MailActivityTypeMailTemplateRel {
  @Column({
    type: 'int'
  })
  mail_activity_type_id: number;

  // @ManyToOne(() => MailActivityType)
  // @JoinColumn({ name: 'mail_activity_type_id' })
  // mail_activity_type: MailActivityType;

  @Column({
    type: 'int'
  })
  mail_template_id: number;

  // @ManyToOne(() => MailTemplate)
  // @JoinColumn({ name: 'mail_template_id' })
  // mail_template: MailTemplate;

}