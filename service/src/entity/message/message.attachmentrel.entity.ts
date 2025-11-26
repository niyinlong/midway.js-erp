import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mail_message AND ir_attachment
 */
@Entity('message_attachment_rel')
export class MessageAttachmentRel {
  @Column({
    type: 'int'
  })
  message_id: number;

  // @ManyToOne(() => Message)
  // @JoinColumn({ name: 'message_id' })
  // message: Message;

  @Column({
    type: 'int'
  })
  attachment_id: number;

  // @ManyToOne(() => Attachment)
  // @JoinColumn({ name: 'attachment_id' })
  // attachment: Attachment;

}