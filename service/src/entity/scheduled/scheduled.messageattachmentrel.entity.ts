import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mail_scheduled_message AND ir_attachment
 */
@Entity('scheduled_message_attachment_rel')
export class ScheduledMessageAttachmentRel {
  @Column({
    type: 'int'
  })
  scheduled_message_id: number;

  // @ManyToOne(() => ScheduledMessage)
  // @JoinColumn({ name: 'scheduled_message_id' })
  // scheduled_message: ScheduledMessage;

  @Column({
    type: 'int'
  })
  attachment_id: number;

  // @ManyToOne(() => Attachment)
  // @JoinColumn({ name: 'attachment_id' })
  // attachment: Attachment;

}