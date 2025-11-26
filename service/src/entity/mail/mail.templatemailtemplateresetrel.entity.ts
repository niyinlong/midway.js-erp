import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mail_template_reset AND mail_template
 */
@Entity('mail_template_mail_template_reset_rel')
export class MailTemplateMailTemplateResetRel {
  @Column({
    type: 'int'
  })
  mail_template_reset_id: number;

  // @ManyToOne(() => MailTemplateReset)
  // @JoinColumn({ name: 'mail_template_reset_id' })
  // mail_template_reset: MailTemplateReset;

  @Column({
    type: 'int'
  })
  mail_template_id: number;

  // @ManyToOne(() => MailTemplate)
  // @JoinColumn({ name: 'mail_template_id' })
  // mail_template: MailTemplate;

}