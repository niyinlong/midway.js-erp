import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * UTM Campaign
 */
@Entity('utm_campaign')
export class UtmCampaign {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Responsible
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

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
   * Campaign Identifier
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Campaign Name
   */
  @Column({
    type: 'jsonb'
  })
  title: object;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Automatically Generated Campaign
   */
  @Column({
    type: 'boolean'
  })
  is_auto_campaign: boolean;

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
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

}