import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mail_template AND ir_act_report_xml
 */
@Entity('mail_template_ir_actions_report_rel')
export class MailTemplateIrActionsReportRel {
  @Column({
    type: 'int'
  })
  mail_template_id: number;

  // @ManyToOne(() => MailTemplate)
  // @JoinColumn({ name: 'mail_template_id' })
  // mail_template: MailTemplate;

  @Column({
    type: 'int'
  })
  ir_actions_report_id: number;

  // @ManyToOne(() => IrActionsReport)
  // @JoinColumn({ name: 'ir_actions_report_id' })
  // ir_actions_report: IrActionsReport;

}