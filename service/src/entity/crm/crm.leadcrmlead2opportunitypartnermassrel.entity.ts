import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN crm_lead2opportunity_partner_mass AND crm_lead
 */
@Entity('crm_lead_crm_lead2opportunity_partner_mass_rel')
export class CrmLeadCrmLead2opportunityPartnerMassRel {
  @Column({
    type: 'int'
  })
  crm_lead2opportunity_partner_mass_id: number;

  // @ManyToOne(() => CrmLead2opportunityPartnerMass)
  // @JoinColumn({ name: 'crm_lead2opportunity_partner_mass_id' })
  // crm_lead2opportunity_partner_mass: CrmLead2opportunityPartnerMass;

  @Column({
    type: 'int'
  })
  crm_lead_id: number;

  // @ManyToOne(() => CrmLead)
  // @JoinColumn({ name: 'crm_lead_id' })
  // crm_lead: CrmLead;

}