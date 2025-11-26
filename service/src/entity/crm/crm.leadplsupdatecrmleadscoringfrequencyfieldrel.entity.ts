import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN crm_lead_pls_update AND crm_lead_scoring_frequency_field
 */
@Entity('crm_lead_pls_update_crm_lead_scoring_frequency_field_rel')
export class CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRel {
  @Column({
    type: 'int'
  })
  crm_lead_pls_update_id: number;

  // @ManyToOne(() => CrmLeadPlsUpdate)
  // @JoinColumn({ name: 'crm_lead_pls_update_id' })
  // crm_lead_pls_update: CrmLeadPlsUpdate;

  @Column({
    type: 'int'
  })
  crm_lead_scoring_frequency_field_id: number;

  // @ManyToOne(() => CrmLeadScoringFrequencyField)
  // @JoinColumn({ name: 'crm_lead_scoring_frequency_field_id' })
  // crm_lead_scoring_frequency_field: CrmLeadScoringFrequencyField;

}