import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mail_activity AND ir_attachment
 */
@Entity('activity_attachment_rel')
export class ActivityAttachmentRel {
  @Column({
    type: 'int'
  })
  activity_id: number;

  // @ManyToOne(() => Activity)
  // @JoinColumn({ name: 'activity_id' })
  // activity: Activity;

  @Column({
    type: 'int'
  })
  attachment_id: number;

  // @ManyToOne(() => Attachment)
  // @JoinColumn({ name: 'attachment_id' })
  // attachment: Attachment;

}