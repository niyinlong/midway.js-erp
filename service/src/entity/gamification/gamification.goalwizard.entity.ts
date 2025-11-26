import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Gamification Goal Wizard
 */
@Entity('gamification_goal_wizard')
export class GamificationGoalWizard {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Goal
   */
  @Column({
    type: 'int'
  })
  goal_id: number;

  // @ManyToOne(() => Goal)
  // @JoinColumn({ name: 'goal_id' })
  // goal: Goal;

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
   * Current
   */
  @Column({
    type: 'varchar'
  })
  current: string;

}