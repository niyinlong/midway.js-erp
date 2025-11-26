import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN crm_lead AND website_visitor
 */
@Entity('crm_lead_website_visitor_rel')
export class CrmLeadWebsiteVisitorRel {
  @Column({
    type: 'int'
  })
  crm_lead_id: number;

  // @ManyToOne(() => CrmLead)
  // @JoinColumn({ name: 'crm_lead_id' })
  // crm_lead: CrmLead;

  @Column({
    type: 'int'
  })
  website_visitor_id: number;

  // @ManyToOne(() => WebsiteVisitor)
  // @JoinColumn({ name: 'website_visitor_id' })
  // website_visitor: WebsiteVisitor;

}