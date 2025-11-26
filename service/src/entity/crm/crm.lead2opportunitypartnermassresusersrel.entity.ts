import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN crm_lead2opportunity_partner_mass AND res_users
 */
@Entity('crm_lead2opportunity_partner_mass_res_users_rel')
export class CrmLead2opportunityPartnerMassResUsersRel {
  @Column({
    type: 'int'
  })
  crm_lead2opportunity_partner_mass_id: number;

  // @ManyToOne(() => CrmLead2opportunityPartnerMass)
  // @JoinColumn({ name: 'crm_lead2opportunity_partner_mass_id' })
  // crm_lead2opportunity_partner_mass: CrmLead2opportunityPartnerMass;

  @Column({
    type: 'int'
  })
  res_users_id: number;

  // @ManyToOne(() => ResUsers)
  // @JoinColumn({ name: 'res_users_id' })
  // res_users: ResUsers;

}