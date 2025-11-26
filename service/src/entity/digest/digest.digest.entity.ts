import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Digest
 */
@Entity('digest_digest')
export class DigestDigest {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Periodicity
   */
  @Column({
    type: 'varchar'
  })
  periodicity: string;

  /**
   * Status
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Next Mailing Date
   */
  @Column({
    type: 'datetime'
  })
  next_run_date: Date;

  /**
   * Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Connected Users
   */
  @Column({
    type: 'boolean'
  })
  kpi_res_users_connected: boolean;

  /**
   * Messages Sent
   */
  @Column({
    type: 'boolean'
  })
  kpi_mail_message_total: boolean;

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
   * Revenue
   */
  @Column({
    type: 'boolean'
  })
  kpi_account_total_revenue: boolean;

  /**
   * All Sales
   */
  @Column({
    type: 'boolean'
  })
  kpi_all_sale_total: boolean;

  /**
   * New Leads
   */
  @Column({
    type: 'boolean'
  })
  kpi_crm_lead_created: boolean;

  /**
   * Opportunities Won
   */
  @Column({
    type: 'boolean'
  })
  kpi_crm_opportunities_won: boolean;

  /**
   * Open Tasks
   */
  @Column({
    type: 'boolean'
  })
  kpi_project_task_opened: boolean;

}