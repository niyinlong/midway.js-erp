import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

/**
 * IAP线索挖掘请求与职位关联表实体
 * 作用：存储线索挖掘请求与目标职位之间的多对多关联关系
 * 该实体用于记录在特定的线索挖掘请求中，用户选择了哪些职位作为目标联系人职位
 */
@Entity('crm_iap_lead_mining_request_crm_iap_lead_role_rel')
export class CrmIapLeadMiningRequestCrmIapLeadRoleRel {
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
   * 职位ID
   * 关联到职位表的主键，标识在挖掘请求中选择的目标职位类型
   */
  @Column({
    type: 'int',
  })
  crm_iap_lead_role_id: number;

  /**
   * 职位对象（注释掉的关联关系）
   * 通过crm_iap_lead_role_id与职位实体建立多对一关系
   */
  // @ManyToOne(() => CrmIapLeadRole)
  // @JoinColumn({ name: 'crm_iap_lead_role_id' })
  // crm_iap_lead_role: CrmIapLeadRole;
}