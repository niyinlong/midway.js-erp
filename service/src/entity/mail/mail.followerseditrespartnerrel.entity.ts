import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mail_followers_edit AND res_partner
 */
@Entity('mail_followers_edit_res_partner_rel')
export class MailFollowersEditResPartnerRel {
  @Column({
    type: 'int'
  })
  mail_followers_edit_id: number;

  // @ManyToOne(() => MailFollowersEdit)
  // @JoinColumn({ name: 'mail_followers_edit_id' })
  // mail_followers_edit: MailFollowersEdit;

  @Column({
    type: 'int'
  })
  res_partner_id: number;

  // @ManyToOne(() => ResPartner)
  // @JoinColumn({ name: 'res_partner_id' })
  // res_partner: ResPartner;

}