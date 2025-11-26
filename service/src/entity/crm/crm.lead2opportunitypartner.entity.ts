import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Convert Lead to Opportunity (not in mass)
 */
@Entity('crm_lead2opportunity_partner')
export class CrmLead2opportunityPartner {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Associated Lead
   */
  @Column({
    type: 'int'
  })
  lead_id: number;

  // @ManyToOne(() => Lead)
  // @JoinColumn({ name: 'lead_id' })
  // lead: Lead;

  /**
   * Company
   */
  @Column({
    type: 'int'
  })
  commercial_partner_id: number;

  // @ManyToOne(() => CommercialPartner)
  // @JoinColumn({ name: 'commercial_partner_id' })
  // commercial_partner: CommercialPartner;

  /**
   * Customer
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * Salesperson
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Sales Team
   */
  @Column({
    type: 'int'
  })
  team_id: number;

  // @ManyToOne(() => Team)
  // @JoinColumn({ name: 'team_id' })
  // team: Team;

  /**
   * Created by
   */
  @Column({
    type: 'int'
  })
  create_uid: number;

  /**
   * Last Updated by
   */
  @Column({
    type: 'int'
  })
  write_uid: number;

  /**
   * Conversion Action
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Related Customer
   */
  @Column({
    type: 'varchar'
  })
  action: string;

  /**
   * Force assignment
   */
  @Column({
    type: 'boolean'
  })
  force_assignment: boolean;

  /**
   * Created on
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

}