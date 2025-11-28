import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * 线索概率学习更新与评分频率字段关联表实体
 * 作用：存储线索概率学习更新配置与线索评分频率字段之间的多对多关联关系，定义特定概率学习更新使用哪些评分频率字段
 */
@Entity('crm_lead_pls_update_crm_lead_scoring_frequency_field_rel')
export class CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRel {
  /**
   * 线索概率学习更新配置ID
   * 作用：关联到具体的概率学习更新配置
   */
  @Column({
    type: 'int',
  })
  crm_lead_pls_update_id: number;

  // 多对一关联到CrmLeadPlsUpdate实体
  // @ManyToOne(() => CrmLeadPlsUpdate)
  // @JoinColumn({ name: 'crm_lead_pls_update_id' })
  // crm_lead_pls_update: CrmLeadPlsUpdate;

  /**
   * 线索评分频率字段ID
   * 作用：关联到具体的评分频率字段配置
   */
  @Column({
    type: 'int',
  })
  crm_lead_scoring_frequency_field_id: number;

  // 多对一关联到CrmLeadScoringFrequencyField实体
  // @ManyToOne(() => CrmLeadScoringFrequencyField)
  // @JoinColumn({ name: 'crm_lead_scoring_frequency_field_id' })
  // crm_lead_scoring_frequency_field: CrmLeadScoringFrequencyField;

}