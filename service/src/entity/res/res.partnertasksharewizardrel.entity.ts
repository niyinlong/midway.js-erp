import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN task_share_wizard AND res_partner
 */
@Entity('res_partner_task_share_wizard_rel')
export class ResPartnerTaskShareWizardRel {
  @Column({
    type: 'int'
  })
  task_share_wizard_id: number;

  // @ManyToOne(() => TaskShareWizard)
  // @JoinColumn({ name: 'task_share_wizard_id' })
  // task_share_wizard: TaskShareWizard;

  @Column({
    type: 'int'
  })
  res_partner_id: number;

  // @ManyToOne(() => ResPartner)
  // @JoinColumn({ name: 'res_partner_id' })
  // res_partner: ResPartner;

}