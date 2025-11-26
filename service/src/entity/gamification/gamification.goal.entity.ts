import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Gamification Goal
 */
@Entity('gamification_goal')
export class GamificationGoal {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Goal Definition
   */
  @Column({
    type: 'int'
  })
  definition_id: number;

  // @ManyToOne(() => Definition)
  // @JoinColumn({ name: 'definition_id' })
  // definition: Definition;

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
   * Challenge Line
   */
  @Column({
    type: 'int'
  })
  line_id: number;

  // @ManyToOne(() => Line)
  // @JoinColumn({ name: 'line_id' })
  // line: Line;

  /**
   * Challenge
   */
  @Column({
    type: 'int'
  })
  challenge_id: number;

  // @ManyToOne(() => Challenge)
  // @JoinColumn({ name: 'challenge_id' })
  // challenge: Challenge;

  /**
   * Remind delay
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
   * Last Update
   */
  @Column({
    type: 'datetime'
  })
  last_update: Date;

  /**
   * To update
   */
  @Column({
    type: 'boolean'
  })
  to_update: boolean;

  /**
   * Closed goal
   */
  @Column({
    type: 'boolean'
  })
  closed: boolean;

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
   * To Reach
   */
  @Column({
    type: 'varchar'
  })
  target_goal: string;

  /**
   * Current Value
   */
  @Column({
    type: 'varchar'
  })
  current: string;

}