import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mail_mail AND res_partner
 */
@Entity('mail_mail_res_partner_rel')
export class MailMailResPartnerRel {
  @Column({
    type: 'int'
  })
  mail_mail_id: number;

  // @ManyToOne(() => MailMail)
  // @JoinColumn({ name: 'mail_mail_id' })
  // mail_mail: MailMail;

  @Column({
    type: 'int'
  })
  res_partner_id: number;

  // @ManyToOne(() => ResPartner)
  // @JoinColumn({ name: 'res_partner_id' })
  // res_partner: ResPartner;

}