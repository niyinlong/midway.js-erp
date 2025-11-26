import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN base_partner_merge_automatic_wizard AND res_partner
 */
@Entity('base_partner_merge_automatic_wizard_res_partner_rel')
export class BasePartnerMergeAutomaticWizardResPartnerRel {
  @Column({
    type: 'int'
  })
  base_partner_merge_automatic_wizard_id: number;

  // @ManyToOne(() => BasePartnerMergeAutomaticWizard)
  // @JoinColumn({ name: 'base_partner_merge_automatic_wizard_id' })
  // base_partner_merge_automatic_wizard: BasePartnerMergeAutomaticWizard;

  @Column({
    type: 'int'
  })
  res_partner_id: number;

  // @ManyToOne(() => ResPartner)
  // @JoinColumn({ name: 'res_partner_id' })
  // res_partner: ResPartner;

}