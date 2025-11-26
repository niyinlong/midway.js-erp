import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN sms_template_reset AND sms_template
 */
@Entity('sms_template_sms_template_reset_rel')
export class SmsTemplateSmsTemplateResetRel {
  @Column({
    type: 'int'
  })
  sms_template_reset_id: number;

  // @ManyToOne(() => SmsTemplateReset)
  // @JoinColumn({ name: 'sms_template_reset_id' })
  // sms_template_reset: SmsTemplateReset;

  @Column({
    type: 'int'
  })
  sms_template_id: number;

  // @ManyToOne(() => SmsTemplate)
  // @JoinColumn({ name: 'sms_template_id' })
  // sms_template: SmsTemplate;

}