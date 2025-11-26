import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_move_send_wizard AND res_partner
 */
@Entity('account_move_send_wizard_res_partner_rel')
export class AccountMoveSendWizardResPartnerRel {
  @Column({
    type: 'int'
  })
  account_move_send_wizard_id: number;

  // @ManyToOne(() => AccountMoveSendWizard)
  // @JoinColumn({ name: 'account_move_send_wizard_id' })
  // account_move_send_wizard: AccountMoveSendWizard;

  @Column({
    type: 'int'
  })
  res_partner_id: number;

  // @ManyToOne(() => ResPartner)
  // @JoinColumn({ name: 'res_partner_id' })
  // res_partner: ResPartner;

}