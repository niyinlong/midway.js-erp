import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN crm_iap_lead_mining_request AND crm_iap_lead_industry
 */
@Entity('crm_iap_lead_industry_crm_iap_lead_mining_request_rel')
export class CrmIapLeadIndustryCrmIapLeadMiningRequestRel {
  @Column({
    type: 'int'
  })
  crm_iap_lead_mining_request_id: number;

  // @ManyToOne(() => CrmIapLeadMiningRequest)
  // @JoinColumn({ name: 'crm_iap_lead_mining_request_id' })
  // crm_iap_lead_mining_request: CrmIapLeadMiningRequest;

  @Column({
    type: 'int'
  })
  crm_iap_lead_industry_id: number;

  // @ManyToOne(() => CrmIapLeadIndustry)
  // @JoinColumn({ name: 'crm_iap_lead_industry_id' })
  // crm_iap_lead_industry: CrmIapLeadIndustry;

}