import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mail_scheduled_message AND res_partner
 */
@Entity('mail_scheduled_message_res_partner_rel')
export class MailScheduledMessageResPartnerRel {
  @Column({
    type: 'int'
  })
  mail_scheduled_message_id: number;

  // @ManyToOne(() => MailScheduledMessage)
  // @JoinColumn({ name: 'mail_scheduled_message_id' })
  // mail_scheduled_message: MailScheduledMessage;

  @Column({
    type: 'int'
  })
  res_partner_id: number;

  // @ManyToOne(() => ResPartner)
  // @JoinColumn({ name: 'res_partner_id' })
  // res_partner: ResPartner;

}