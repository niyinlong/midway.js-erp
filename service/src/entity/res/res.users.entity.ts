import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('res_users')
export class ResUsers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  @Column({
    type: 'boolean'
  })
  active: boolean;

  @Column({
    type: 'datetime'
  })
  create_date: Date;

  @Column({
    type: 'varchar'
  })
  login: string;

  @Column({
    type: 'varchar'
  })
  password: string;

  /**
   * Home Action
   */
  @Column({
    type: 'int'
  })
  action_id: number;

  // @ManyToOne(() => Action)
  // @JoinColumn({ name: 'action_id' })
  // action: Action;

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
   * Email Signature
   */
  @Column({
    type: 'varchar'
  })
  signature: string;

  /**
   * Share User
   */
  @Column({
    type: 'boolean'
  })
  share: boolean;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

  /**
   * Totp Last Counter
   */
  @Column({
    type: 'int'
  })
  totp_last_counter: number;

  @Column({
    type: 'varchar'
  })
  totp_secret: string;

  /**
   * Onboarding
   */
  @Column({
    type: 'boolean'
  })
  tour_enabled: boolean;

  /**
   * Notification
   */
  @Column({
    type: 'varchar'
  })
  notification_type: string;

  /**
   * IM status manually set by the user
   */
  @Column({
    type: 'varchar'
  })
  manual_im_status: string;

  /**
   * Vacation Responder
   */
  @Column({
    type: 'varchar'
  })
  out_of_office_message: string;

  /**
   * Out Of Office From
   */
  @Column({
    type: 'datetime'
  })
  out_of_office_from: Date;

  /**
   * Out Of Office To
   */
  @Column({
    type: 'datetime'
  })
  out_of_office_to: Date;

  /**
   * OdooBot Status
   */
  @Column({
    type: 'varchar'
  })
  odoobot_state: string;

  /**
   * Odoobot Failed
   */
  @Column({
    type: 'boolean'
  })
  odoobot_failed: boolean;

  /**
   * User Sales Team
   */
  @Column({
    type: 'int'
  })
  sale_team_id: number;

  // @ManyToOne(() => SaleTeam)
  // @JoinColumn({ name: 'sale_team_id' })
  // sale_team: SaleTeam;

  /**
   * Default Warehouse
   */
  @Column({
    type: 'jsonb'
  })
  property_warehouse_id: object;

  // @ManyToOne(() => PropertyWarehouse)
  // @JoinColumn({ name: 'property_warehouse_id' })
  // property_warehouse: PropertyWarehouse;

  /**
   * Karma
   */
  @Column({
    type: 'int'
  })
  karma: number;

  /**
   * Rank
   */
  @Column({
    type: 'int'
  })
  rank_id: number;

  // @ManyToOne(() => Rank)
  // @JoinColumn({ name: 'rank_id' })
  // rank: Rank;

  /**
   * Next Rank
   */
  @Column({
    type: 'int'
  })
  next_rank_id: number;

  // @ManyToOne(() => NextRank)
  // @JoinColumn({ name: 'next_rank_id' })
  // next_rank: NextRank;

  /**
   * Website
   */
  @Column({
    type: 'int'
  })
  website_id: number;

  // @ManyToOne(() => Website)
  // @JoinColumn({ name: 'website_id' })
  // website: Website;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}