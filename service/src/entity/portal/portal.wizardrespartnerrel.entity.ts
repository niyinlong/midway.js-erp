import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN portal_wizard AND res_partner
 */
@Entity('portal_wizard_res_partner_rel')
export class PortalWizardResPartnerRel {
  @Column({
    type: 'int'
  })
  portal_wizard_id: number;

  // @ManyToOne(() => PortalWizard)
  // @JoinColumn({ name: 'portal_wizard_id' })
  // portal_wizard: PortalWizard;

  @Column({
    type: 'int'
  })
  res_partner_id: number;

  // @ManyToOne(() => ResPartner)
  // @JoinColumn({ name: 'res_partner_id' })
  // res_partner: ResPartner;

}