import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

/**
 * IAP线索挖掘请求与标签关联表实体
 * 作用：存储线索挖掘请求与标签之间的多对多关联关系
 * 该实体用于记录在特定的线索挖掘请求中，用户为挖掘结果指定了哪些标签，便于后续的分类和筛选
 */
@Entity('crm_iap_lead_mining_request_crm_tag_rel')
export class CrmIapLeadMiningRequestCrmTagRel {
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
   * 标签ID
   * 关联到标签表的主键，标识在挖掘请求中选择的标签
   */
  @Column({
    type: 'int',
  })
  crm_tag_id: number;

  /**
   * 标签对象（注释掉的关联关系）
   * 通过crm_tag_id与标签实体建立多对一关系
   */
  // @ManyToOne(() => CrmTag)
  // @JoinColumn({ name: 'crm_tag_id' })
  // crm_tag: CrmTag;
}