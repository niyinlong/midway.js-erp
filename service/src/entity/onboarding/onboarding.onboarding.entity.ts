import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Onboarding
 */
@Entity('onboarding_onboarding')
export class OnboardingOnboarding {
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
   * One word name
   */
  @Column({
    type: 'varchar'
  })
  route_name: string;

  /**
   * Message at completion
   */
  @Column({
    type: 'varchar'
  })
  text_completed: string;

  /**
   * Closing action
   */
  @Column({
    type: 'varchar'
  })
  panel_close_action_name: string;

  /**
   * Name of the onboarding
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

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