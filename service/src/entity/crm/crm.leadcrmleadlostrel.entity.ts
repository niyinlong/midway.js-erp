import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * 线索与丢失线索关联表实体
 * 作用：存储线索与丢失线索记录之间的多对多关联关系，定义哪些线索关联到特定的丢失原因记录
 */
@Entity('crm_lead_crm_lead_lost_rel')
export class CrmLeadCrmLeadLostRel {
  /**
   * 丢失线索记录ID
   * 作用：关联到线索丢失原因的记录
   */
  @Column({
    type: 'int',
  })
  crm_lead_lost_id: number;

  // 多对一关联到CrmLeadLost实体
  // @ManyToOne(() => CrmLeadLost)
  // @JoinColumn({ name: 'crm_lead_lost_id' })
  // crm_lead_lost: CrmLeadLost;

  /**
   * 线索ID
   * 作用：关联到被标记为丢失的销售线索记录
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