import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Lead Scoring Frequency
 */
@Entity('crm_lead_scoring_frequency')
export class CrmLeadScoringFrequency {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Variable
   */
  @Column({
    type: 'varchar'
  })
  variable: string;

  /**
   * Value
   */
  @Column({
    type: 'varchar'
  })
  value: string;

  /**
   * Won Count
   */
  @Column({
    type: 'int'
  })
  won_count: number;

  /**
   * Lost Count
   */
  @Column({
    type: 'int'
  })
  lost_count: number;

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