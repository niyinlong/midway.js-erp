import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Track Karma Changes
 */
@Entity('gamification_karma_tracking')
export class GamificationKarmaTracking {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * User
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Old Karma Value
   */
  @Column({
    type: 'int'
  })
  old_value: number;

  /**
   * New Karma Value
   */
  @Column({
    type: 'int'
  })
  new_value: number;

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
   * Source
   */
  @Column({
    type: 'varchar'
  })
  origin_ref: string;

  /**
   * Source Type
   */
  @Column({
    type: 'varchar'
  })
  origin_ref_model_name: string;

  /**
   * Description
   */
  @Column({
    type: 'varchar'
  })
  reason: string;

  /**
   * Consolidated
   */
  @Column({
    type: 'boolean'
  })
  consolidated: boolean;

  /**
   * Tracking Date
   */
  @Column({
    type: 'datetime'
  })
  tracking_date: Date;

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