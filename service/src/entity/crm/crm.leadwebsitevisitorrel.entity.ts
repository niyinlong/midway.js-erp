import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * 线索与网站访客关联表实体
 * 作用：存储CRM线索与网站访客之间的多对多关联关系，用于跟踪线上访客与CRM线索的对应关系
 */
@Entity('crm_lead_website_visitor_rel')
export class CrmLeadWebsiteVisitorRel {
  /**
   * CRM线索ID
   * 作用：关联到具体的CRM线索记录
   */
  @Column({
    type: 'int',
  })
  crm_lead_id: number;

  // 多对一关联到CrmLead实体
  // @ManyToOne(() => CrmLead)
  // @JoinColumn({ name: 'crm_lead_id' })
  // crm_lead: CrmLead;

  /**
   * 网站访客ID
   * 作用：关联到具体的网站访客记录
   */
  @Column({
    type: 'int',
  })
  website_visitor_id: number;

  // 多对一关联到WebsiteVisitor实体
  // @ManyToOne(() => WebsiteVisitor)
  // @JoinColumn({ name: 'website_visitor_id' })
  // website_visitor: WebsiteVisitor;

}