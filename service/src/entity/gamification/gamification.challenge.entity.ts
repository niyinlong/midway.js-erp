import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Gamification Challenge
 */
@Entity('gamification_challenge')
export class GamificationChallenge {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Responsible
   */
  @Column({
    type: 'int'
  })
  manager_id: number;

  // @ManyToOne(() => Manager)
  // @JoinColumn({ name: 'manager_id' })
  // manager: Manager;

  /**
   * For Every Succeeding User
   */
  @Column({
    type: 'int'
  })
  reward_id: number;

  // @ManyToOne(() => Reward)
  // @JoinColumn({ name: 'reward_id' })
  // reward: Reward;

  /**
   * For 1st user
   */
  @Column({
    type: 'int'
  })
  reward_first_id: number;

  // @ManyToOne(() => RewardFirst)
  // @JoinColumn({ name: 'reward_first_id' })
  // reward_first: RewardFirst;

  /**
   * For 2nd user
   */
  @Column({
    type: 'int'
  })
  reward_second_id: number;

  // @ManyToOne(() => RewardSecond)
  // @JoinColumn({ name: 'reward_second_id' })
  // reward_second: RewardSecond;

  /**
   * For 3rd user
   */
  @Column({
    type: 'int'
  })
  reward_third_id: number;

  // @ManyToOne(() => RewardThird)
  // @JoinColumn({ name: 'reward_third_id' })
  // reward_third: RewardThird;

  /**
   * Send a copy to
   */
  @Column({
    type: 'int'
  })
  report_message_group_id: number;

  // @ManyToOne(() => ReportMessageGroup)
  // @JoinColumn({ name: 'report_message_group_id' })
  // report_message_group: ReportMessageGroup;

  /**
   * Report Template
   */
  @Column({
    type: 'int'
  })
  report_template_id: number;

  // @ManyToOne(() => ReportTemplate)
  // @JoinColumn({ name: 'report_template_id' })
  // report_template: ReportTemplate;

  /**
   * Non-updated manual goals will be reminded after
   */
  @Column({
    type: 'int'
  })
  remind_update_delay: number;

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
   * State
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * User domain
   */
  @Column({
    type: 'varchar'
  })
  user_domain: string;

  /**
   * Periodicity
   */
  @Column({
    type: 'varchar'
  })
  period: string;

  /**
   * Display Mode
   */
  @Column({
    type: 'varchar'
  })
  visibility_mode: string;

  /**
   * Report Frequency
   */
  @Column({
    type: 'varchar'
  })
  report_message_frequency: string;

  /**
   * Appears in
   */
  @Column({
    type: 'varchar'
  })
  challenge_category: string;

  /**
   * Start Date
   */
  @Column({
    type: 'datetime'
  })
  start_date: Date;

  /**
   * End Date
   */
  @Column({
    type: 'datetime'
  })
  end_date: Date;

  /**
   * Last Report Date
   */
  @Column({
    type: 'datetime'
  })
  last_report_date: Date;

  /**
   * Next Report Date
   */
  @Column({
    type: 'datetime'
  })
  next_report_date: Date;

  /**
   * Challenge Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Description
   */
  @Column({
    type: 'jsonb'
  })
  description: object;

  /**
   * Reward Bests if not Succeeded?
   */
  @Column({
    type: 'boolean'
  })
  reward_failure: boolean;

  /**
   * Reward as soon as every goal is reached
   */
  @Column({
    type: 'boolean'
  })
  reward_realtime: boolean;

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