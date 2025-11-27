import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

/**
 * 批量线索转化关系表实体
 * 作用：存储批量线索转化操作与线索之间的多对多关联关系
 * 该实体用于记录在批量将线索转化为商机时，哪些线索被包含在特定的批量转化操作中
 */
@Entity('crm_convert_lead_mass_lead_rel')
export class CrmConvertLeadMassLeadRel {
  /**
   * 批量转化操作ID
   * 关联到批量线索转化操作表的主键，标识属于哪个批量转化操作
   */
  @Column({
    type: 'int',
  })
  crm_lead2opportunity_partner_mass_id: number;

  /**
   * 批量转化操作对象（注释掉的关联关系）
   * 通过crm_lead2opportunity_partner_mass_id与批量线索转化操作实体建立多对一关系
   */
  // @ManyToOne(() => CrmLead2opportunityPartnerMass)
  // @JoinColumn({ name: 'crm_lead2opportunity_partner_mass_id' })
  // crm_lead2opportunity_partner_mass: CrmLead2opportunityPartnerMass;

  /**
   * 线索ID
   * 关联到线索表的主键，标识被转化的线索
   */
  @Column({
    type: 'int',
  })
  crm_lead_id: number;

  /**
   * 线索对象（注释掉的关联关系）
   * 通过crm_lead_id与线索实体建立多对一关系
   */
  // @ManyToOne(() => CrmLead)
  // @JoinColumn({ name: 'crm_lead_id' })
  // crm_lead: CrmLead;
}