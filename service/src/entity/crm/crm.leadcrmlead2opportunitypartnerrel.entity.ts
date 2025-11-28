import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * 线索与单个转商机配置关联表实体
 * 作用：存储线索与单个线索转商机配置之间的多对多关联关系，定义哪些线索属于特定的单个转换操作
 */
@Entity('crm_lead_crm_lead2opportunity_partner_rel')
export class CrmLeadCrmLead2opportunityPartnerRel {
  /**
   * 单个线索转商机配置ID
   * 作用：关联到单个线索转商机的配置记录
   */
  @Column({
    type: 'int',
  })
  crm_lead2opportunity_partner_id: number;

  // 多对一关联到CrmLead2opportunityPartner实体
  // @ManyToOne(() => CrmLead2opportunityPartner)
  // @JoinColumn({ name: 'crm_lead2opportunity_partner_id' })
  // crm_lead2opportunity_partner: CrmLead2opportunityPartner;

  /**
   * 线索ID
   * 作用：关联到参与单个转换的销售线索记录
   */
  @Column({
    type: 'int',
  })
  crm_lead_id: number;

  // 多对一关联到CrmLead实体
  // @ManyToOne(() => CrmLead)
  // @JoinColumn({ name: 'crm_lead_id' })
  // crm_lead: CrmLead;
}