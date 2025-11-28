import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * 批量线索转商机与用户关联表实体
 * 作用：存储批量线索转商机操作与用户之间的多对多关联关系，定义哪些用户可以进行特定的批量转换操作
 */
@Entity('crm_lead2opportunity_partner_mass_res_users_rel')
export class CrmLead2opportunityPartnerMassResUsersRel {
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
   * 用户ID
   * 作用：关联到可以执行此批量转换操作的用户
   */
  @Column({
    type: 'int',
  })
  res_users_id: number;

  // 多对一关联到ResUsers实体
  // @ManyToOne(() => ResUsers)
  // @JoinColumn({ name: 'res_users_id' })
  // res_users: ResUsers;
}