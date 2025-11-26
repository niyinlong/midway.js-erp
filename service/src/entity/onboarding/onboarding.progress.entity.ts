import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Onboarding Progress Tracker
 */
@Entity('onboarding_progress')
export class OnboardingProgress {
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
   * Related onboarding tracked
   */
  @Column({
    type: 'int'
  })
  onboarding_id: number;

  // @ManyToOne(() => Onboarding)
  // @JoinColumn({ name: 'onboarding_id' })
  // onboarding: Onboarding;

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
   * Onboarding progress
   */
  @Column({
    type: 'varchar'
  })
  onboarding_state: string;

  /**
   * Was panel closed?
   */
  @Column({
    type: 'boolean'
  })
  is_onboarding_closed: boolean;

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