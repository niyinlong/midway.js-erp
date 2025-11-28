import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * 线索与批量转商机配置关联表实体
 * 作用：存储线索与批量线索转商机配置之间的多对多关联关系，定义哪些线索属于特定的批量转换操作
 */
@Entity('crm_lead_crm_lead2opportunity_partner_mass_rel')
export class CrmLeadCrmLead2opportunityPartnerMassRel {
  /**
   * 批量线索转商机配置ID
   * 作用：关联到批量线索转商机的配置记录
   */
  @Column({
    type: 'int',
  })
  crm_lead2opportunity_partner_mass_id: number;

  // 多对一关联到CrmLead2opportunityPartnerMass实体
  // @ManyToOne(() => CrmLead2opportunityPartnerMass)
  // @JoinColumn({ name: 'crm_lead2opportunity_partner_mass_id' })
  // crm_lead2opportunity_partner_mass: CrmLead2opportunityPartnerMass;

  /**
   * 线索ID
   * 作用：关联到参与批量转换的销售线索记录
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