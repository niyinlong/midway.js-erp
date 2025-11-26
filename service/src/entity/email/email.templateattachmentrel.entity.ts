import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mail_template AND ir_attachment
 */
@Entity('email_template_attachment_rel')
export class EmailTemplateAttachmentRel {
  @Column({
    type: 'int'
  })
  email_template_id: number;

  // @ManyToOne(() => EmailTemplate)
  // @JoinColumn({ name: 'email_template_id' })
  // email_template: EmailTemplate;

  @Column({
    type: 'int'
  })
  attachment_id: number;

  // @ManyToOne(() => Attachment)
  // @JoinColumn({ name: 'attachment_id' })
  // attachment: Attachment;

}