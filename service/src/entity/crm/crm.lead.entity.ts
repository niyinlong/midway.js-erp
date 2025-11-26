import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Lead
 */
@Entity('crm_lead')
export class CrmLead {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Campaign
   */
  @Column({
    type: 'int'
  })
  campaign_id: number;

  // @ManyToOne(() => Campaign)
  // @JoinColumn({ name: 'campaign_id' })
  // campaign: Campaign;

  /**
   * Source
   */
  @Column({
    type: 'int'
  })
  source_id: number;

  // @ManyToOne(() => Source)
  // @JoinColumn({ name: 'source_id' })
  // source: Source;

  /**
   * Medium
   */
  @Column({
    type: 'int'
  })
  medium_id: number;

  // @ManyToOne(() => Medium)
  // @JoinColumn({ name: 'medium_id' })
  // medium: Medium;

  /**
   * Bounce
   */
  @Column({
    type: 'int'
  })
  message_bounce: number;

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
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  /**
   * Stage
   */
  @Column({
    type: 'int'
  })
  stage_id: number;

  // @ManyToOne(() => Stage)
  // @JoinColumn({ name: 'stage_id' })
  // stage: Stage;

  /**
   * Color Index
   */
  @Column({
    type: 'int'
  })
  color: number;

  /**
   * Recurring Plan
   */
  @Column({
    type: 'int'
  })
  recurring_plan: number;

  /**
   * Contact
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * Language
   */
  @Column({
    type: 'int'
  })
  lang_id: number;

  // @ManyToOne(() => Lang)
  // @JoinColumn({ name: 'lang_id' })
  // lang: Lang;

  /**
   * State
   */
  @Column({
    type: 'int'
  })
  state_id: number;

  // @ManyToOne(() => State)
  // @JoinColumn({ name: 'state_id' })
  // state: State;

  /**
   * Country
   */
  @Column({
    type: 'int'
  })
  country_id: number;

  // @ManyToOne(() => Country)
  // @JoinColumn({ name: 'country_id' })
  // country: Country;

  /**
   * Lost Reason
   */
  @Column({
    type: 'int'
  })
  lost_reason_id: number;

  // @ManyToOne(() => LostReason)
  // @JoinColumn({ name: 'lost_reason_id' })
  // lost_reason: LostReason;

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
   * Sanitized Number
   */
  @Column({
    type: 'varchar'
  })
  phone_sanitized: string;

  /**
   * Normalized Email
   */
  @Column({
    type: 'varchar'
  })
  email_normalized: string;

  /**
   * Email cc
   */
  @Column({
    type: 'varchar'
  })
  email_cc: string;

  /**
   * Opportunity
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Referred By
   */
  @Column({
    type: 'varchar'
  })
  referred: string;

  /**
   * Type
   */
  @Column({
    type: 'varchar'
  })
  type: string;

  /**
   * Priority
   */
  @Column({
    type: 'varchar'
  })
  priority: string;

  /**
   * Contact Name
   */
  @Column({
    type: 'varchar'
  })
  contact_name: string;

  /**
   * Company Name
   */
  @Column({
    type: 'varchar'
  })
  partner_name: string;

  /**
   * Job Position
   */
  @Column({
    type: 'varchar'
  })
  function: string;

  /**
   * Email
   */
  @Column({
    type: 'varchar'
  })
  email_from: string;

  /**
   * Email Domain Criterion
   */
  @Column({
    type: 'varchar'
  })
  email_domain_criterion: string;

  /**
   * Phone
   */
  @Column({
    type: 'varchar'
  })
  phone: string;

  /**
   * Phone Quality
   */
  @Column({
    type: 'varchar'
  })
  phone_state: string;

  /**
   * Email Quality
   */
  @Column({
    type: 'varchar'
  })
  email_state: string;

  /**
   * Website
   */
  @Column({
    type: 'varchar'
  })
  website: string;

  /**
   * Street
   */
  @Column({
    type: 'varchar'
  })
  street: string;

  /**
   * Street2
   */
  @Column({
    type: 'varchar'
  })
  street2: string;

  /**
   * Zip
   */
  @Column({
    type: 'varchar'
  })
  zip: string;

  /**
   * City
   */
  @Column({
    type: 'varchar'
  })
  city: string;

  /**
   * Won/Lost
   */
  @Column({
    type: 'varchar'
  })
  won_status: string;

  /**
   * Expected Closing
   */
  @Column({
    type: 'datetime'
  })
  date_deadline: Date;

  /**
   * Properties
   */
  @Column({
    type: 'jsonb'
  })
  lead_properties: object;

  /**
   * Notes
   */
  @Column({
    type: 'varchar'
  })
  description: string;

  /**
   * Expected Revenue
   */
  @Column({
    type: 'int'
  })
  expected_revenue: number;

  /**
   * Prorated Revenue
   */
  @Column({
    type: 'int'
  })
  prorated_revenue: number;

  /**
   * Recurring Revenues
   */
  @Column({
    type: 'int'
  })
  recurring_revenue: number;

  /**
   * Expected MRR
   */
  @Column({
    type: 'int'
  })
  recurring_revenue_monthly: number;

  /**
   * Prorated MRR
   */
  @Column({
    type: 'int'
  })
  recurring_revenue_monthly_prorated: number;

  /**
   * Prorated Recurring Revenues
   */
  @Column({
    type: 'int'
  })
  recurring_revenue_prorated: number;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Closed Date
   */
  @Column({
    type: 'datetime'
  })
  date_closed: Date;

  /**
   * Last Action
   */
  @Column({
    type: 'datetime'
  })
  date_automation_last: Date;

  /**
   * Assignment Date
   */
  @Column({
    type: 'datetime'
  })
  date_open: Date;

  /**
   * Last Stage Update
   */
  @Column({
    type: 'datetime'
  })
  date_last_stage_update: Date;

  /**
   * Conversion Date
   */
  @Column({
    type: 'datetime'
  })
  date_conversion: Date;

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

  /**
   * Days to Assign
   */
  @Column({
    type: 'varchar'
  })
  day_open: string;

  /**
   * Days to Close
   */
  @Column({
    type: 'varchar'
  })
  day_close: string;

  /**
   * Probability
   */
  @Column({
    type: 'varchar'
  })
  probability: string;

  /**
   * Automated Probability
   */
  @Column({
    type: 'varchar'
  })
  automated_probability: string;

  /**
   * Reveal ID
   */
  @Column({
    type: 'varchar'
  })
  reveal_id: string;

  // @ManyToOne(() => Reveal)
  // @JoinColumn({ name: 'reveal_id' })
  // reveal: Reveal;

  /**
   * Enrichment done
   */
  @Column({
    type: 'boolean'
  })
  iap_enrich_done: boolean;

  /**
   * Lead Mining Request
   */
  @Column({
    type: 'int'
  })
  lead_mining_request_id: number;

  // @ManyToOne(() => LeadMiningRequest)
  // @JoinColumn({ name: 'lead_mining_request_id' })
  // lead_mining_request: LeadMiningRequest;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}