import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN crm_iap_lead_mining_request AND res_country_state
 */
@Entity('crm_iap_lead_mining_request_res_country_state_rel')
export class CrmIapLeadMiningRequestResCountryStateRel {
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
  res_country_state_id: number;

  // @ManyToOne(() => ResCountryState)
  // @JoinColumn({ name: 'res_country_state_id' })
  // res_country_state: ResCountryState;

}