import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN crm_iap_lead_mining_request AND crm_iap_lead_role
 */
@Entity('crm_iap_lead_mining_request_crm_iap_lead_role_rel')
export class CrmIapLeadMiningRequestCrmIapLeadRoleRel {
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
  crm_iap_lead_role_id: number;

  // @ManyToOne(() => CrmIapLeadRole)
  // @JoinColumn({ name: 'crm_iap_lead_role_id' })
  // crm_iap_lead_role: CrmIapLeadRole;

}