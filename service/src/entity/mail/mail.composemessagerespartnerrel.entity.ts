import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mail_compose_message AND res_partner
 */
@Entity('mail_compose_message_res_partner_rel')
export class MailComposeMessageResPartnerRel {
  @Column({
    type: 'int'
  })
  wizard_id: number;

  // @ManyToOne(() => Wizard)
  // @JoinColumn({ name: 'wizard_id' })
  // wizard: Wizard;

  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

}