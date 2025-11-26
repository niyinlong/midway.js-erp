import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * CRM Lead Mining Request
 */
@Entity('crm_iap_lead_mining_request')
export class CrmIapLeadMiningRequest {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Number of Leads
   */
  @Column({
    type: 'int'
  })
  lead_number: number;

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
   * Size
   */
  @Column({
    type: 'int'
  })
  company_size_min: number;

  /**
   * Company Size Max
   */
  @Column({
    type: 'int'
  })
  company_size_max: number;

  /**
   * Number of Contacts
   */
  @Column({
    type: 'int'
  })
  contact_number: number;

  /**
   * Preferred Role
   */
  @Column({
    type: 'int'
  })
  preferred_role_id: number;

  // @ManyToOne(() => PreferredRole)
  // @JoinColumn({ name: 'preferred_role_id' })
  // preferred_role: PreferredRole;

  /**
   * Seniority
   */
  @Column({
    type: 'int'
  })
  seniority_id: number;

  // @ManyToOne(() => Seniority)
  // @JoinColumn({ name: 'seniority_id' })
  // seniority: Seniority;

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
   * Request Number
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Status
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Target
   */
  @Column({
    type: 'varchar'
  })
  search_type: string;

  /**
   * Error Type
   */
  @Column({
    type: 'varchar'
  })
  error_type: string;

  /**
   * Type
   */
  @Column({
    type: 'varchar'
  })
  lead_type: string;

  /**
   * Filter on
   */
  @Column({
    type: 'varchar'
  })
  contact_filter_type: string;

  /**
   * Filter on Size
   */
  @Column({
    type: 'boolean'
  })
  filter_on_size: boolean;

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