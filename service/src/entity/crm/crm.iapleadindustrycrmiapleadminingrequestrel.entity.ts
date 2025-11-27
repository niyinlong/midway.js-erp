import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

/**
 * IAP线索行业与线索挖掘请求关联表实体
 * 作用：存储IAP线索挖掘请求与线索行业之间的多对多关联关系
 * 该实体用于记录在特定的线索挖掘请求中，用户选择了哪些行业作为目标挖掘范围
 */
@Entity('crm_iap_lead_industry_crm_iap_lead_mining_request_rel')
export class CrmIapLeadIndustryCrmIapLeadMiningRequestRel {
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
   * 线索行业ID
   * 关联到线索行业表的主键，标识在挖掘请求中选择的目标行业
   */
  @Column({
    type: 'int',
  })
  crm_iap_lead_industry_id: number;

  /**
   * 线索行业对象（注释掉的关联关系）
   * 通过crm_iap_lead_industry_id与线索行业实体建立多对一关系
   */
  // @ManyToOne(() => CrmIapLeadIndustry)
  // @JoinColumn({ name: 'crm_iap_lead_industry_id' })
  // crm_iap_lead_industry: CrmIapLeadIndustry;
}