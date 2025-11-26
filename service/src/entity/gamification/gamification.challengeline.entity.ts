import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Gamification generic goal for challenge
 */
@Entity('gamification_challenge_line')
export class GamificationChallengeLine {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Target Value to Reach
   */
  @Column({
    type: 'varchar'
  })
  target_goal: string;

}