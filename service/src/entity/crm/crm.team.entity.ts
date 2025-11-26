import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Sales Team
 */
@Entity('crm_team')
export class CrmTeam {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Team Leader
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Color Index
   */
  @Column({
    type: 'int'
  })
  color: number;

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
   * Sales Team
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

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
   * Invoicing Target
   */
  @Column({
    type: 'varchar'
  })
  invoiced_target: string;

  /**
   * Alias
   */
  @Column({
    type: 'int'
  })
  alias_id: number;

  // @ManyToOne(() => Alias)
  // @JoinColumn({ name: 'alias_id' })
  // alias: Alias;

  /**
   * Assignment Domain
   */
  @Column({
    type: 'varchar'
  })
  assignment_domain: string;

  /**
   * Lead Properties
   */
  @Column({
    type: 'jsonb'
  })
  lead_properties_definition: object;

  /**
   * Leads
   */
  @Column({
    type: 'boolean'
  })
  use_leads: boolean;

  /**
   * Pipeline
   */
  @Column({
    type: 'boolean'
  })
  use_opportunities: boolean;

  /**
   * Skip auto assignment
   */
  @Column({
    type: 'boolean'
  })
  assignment_optout: boolean;

}