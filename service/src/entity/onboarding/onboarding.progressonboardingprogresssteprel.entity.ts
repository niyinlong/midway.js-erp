import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN onboarding_progress AND onboarding_progress_step
 */
@Entity('onboarding_progress_onboarding_progress_step_rel')
export class OnboardingProgressOnboardingProgressStepRel {
  @Column({
    type: 'int'
  })
  onboarding_progress_id: number;

  // @ManyToOne(() => OnboardingProgress)
  // @JoinColumn({ name: 'onboarding_progress_id' })
  // onboarding_progress: OnboardingProgress;

  @Column({
    type: 'int'
  })
  onboarding_progress_step_id: number;

  // @ManyToOne(() => OnboardingProgressStep)
  // @JoinColumn({ name: 'onboarding_progress_step_id' })
  // onboarding_progress_step: OnboardingProgressStep;

}