import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN crm_iap_lead_mining_request AND crm_tag
 */
@Entity('crm_iap_lead_mining_request_crm_tag_rel')
export class CrmIapLeadMiningRequestCrmTagRel {
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
  crm_tag_id: number;

  // @ManyToOne(() => CrmTag)
  // @JoinColumn({ name: 'crm_tag_id' })
  // crm_tag: CrmTag;

}