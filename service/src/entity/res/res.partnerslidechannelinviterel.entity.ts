import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN slide_channel_invite AND res_partner
 */
@Entity('res_partner_slide_channel_invite_rel')
export class ResPartnerSlideChannelInviteRel {
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
  res_partner_id: number;

  // @ManyToOne(() => ResPartner)
  // @JoinColumn({ name: 'res_partner_id' })
  // res_partner: ResPartner;

}