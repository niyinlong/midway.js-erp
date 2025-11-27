import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

/**
 * IAP线索挖掘请求与国家州/省关联表实体
 * 作用：存储线索挖掘请求与国家州/省之间的多对多关联关系
 * 该实体用于记录在特定的线索挖掘请求中，用户选择了哪些州或省作为目标线索的所在地区
 */
@Entity('crm_iap_lead_mining_request_res_country_state_rel')
export class CrmIapLeadMiningRequestResCountryStateRel {
  /**
   * 线索挖掘请求ID
   * 关联到线索挖掘请求表的主键，标识属于哪个特定的线索挖掘操作
   */
  @Column({
    type: 'int',
  })
  crm_iap_lead_mining_request_id: number;

  /**
   * 线索挖掘请求对象（注释掉的关联关系）
   * 通过crm_iap_lead_mining_request_id与线索挖掘请求实体建立多对一关系
   */
  // @ManyToOne(() => CrmIapLeadMiningRequest)
  // @JoinColumn({ name: 'crm_iap_lead_mining_request_id' })
  // crm_iap_lead_mining_request: CrmIapLeadMiningRequest;

  /**
   * 国家州/省ID
   * 关联到国家州/省表的主键，标识在挖掘请求中选择的目标州或省
   */
  @Column({
    type: 'int',
  })
  res_country_state_id: number;

  /**
   * 国家州/省对象（注释掉的关联关系）
   * 通过res_country_state_id与国家州/省实体建立多对一关系
   */
  // @ManyToOne(() => ResCountryState)
  // @JoinColumn({ name: 'res_country_state_id' })
  // res_country_state: ResCountryState;
}