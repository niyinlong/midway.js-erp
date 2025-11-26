import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN slide_channel_invite AND ir_attachment
 */
@Entity('ir_attachment_slide_channel_invite_rel')
export class IrAttachmentSlideChannelInviteRel {
  @Column({
    type: 'int'
  })
  slide_channel_invite_id: number;

  // @ManyToOne(() => SlideChannelInvite)
  // @JoinColumn({ name: 'slide_channel_invite_id' })
  // slide_channel_invite: SlideChannelInvite;

  @Column({
    type: 'int'
  })
  ir_attachment_id: number;

  // @ManyToOne(() => IrAttachment)
  // @JoinColumn({ name: 'ir_attachment_id' })
  // ir_attachment: IrAttachment;

}