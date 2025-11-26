import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN crm_lead2opportunity_partner AND crm_lead
 */
@Entity('crm_lead_crm_lead2opportunity_partner_rel')
export class CrmLeadCrmLead2opportunityPartnerRel {
  @Column({
    type: 'int'
  })
  crm_lead2opportunity_partner_id: number;

  // @ManyToOne(() => CrmLead2opportunityPartner)
  // @JoinColumn({ name: 'crm_lead2opportunity_partner_id' })
  // crm_lead2opportunity_partner: CrmLead2opportunityPartner;

  @Column({
    type: 'int'
  })
  crm_lead_id: number;

  // @ManyToOne(() => CrmLead)
  // @JoinColumn({ name: 'crm_lead_id' })
  // crm_lead: CrmLead;

}