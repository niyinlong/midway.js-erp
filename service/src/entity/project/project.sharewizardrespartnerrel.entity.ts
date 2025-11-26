import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN project_share_wizard AND res_partner
 */
@Entity('project_share_wizard_res_partner_rel')
export class ProjectShareWizardResPartnerRel {
  @Column({
    type: 'int'
  })
  project_share_wizard_id: number;

  // @ManyToOne(() => ProjectShareWizard)
  // @JoinColumn({ name: 'project_share_wizard_id' })
  // project_share_wizard: ProjectShareWizard;

  @Column({
    type: 'int'
  })
  res_partner_id: number;

  // @ManyToOne(() => ResPartner)
  // @JoinColumn({ name: 'res_partner_id' })
  // res_partner: ResPartner;

}