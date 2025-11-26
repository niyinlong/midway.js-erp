import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN crm_lead_lost AND crm_lead
 */
@Entity('crm_lead_crm_lead_lost_rel')
export class CrmLeadCrmLeadLostRel {
  @Column({
    type: 'int'
  })
  crm_lead_lost_id: number;

  // @ManyToOne(() => CrmLeadLost)
  // @JoinColumn({ name: 'crm_lead_lost_id' })
  // crm_lead_lost: CrmLeadLost;

  @Column({
    type: 'int'
  })
  crm_lead_id: number;

  // @ManyToOne(() => CrmLead)
  // @JoinColumn({ name: 'crm_lead_id' })
  // crm_lead: CrmLead;

}