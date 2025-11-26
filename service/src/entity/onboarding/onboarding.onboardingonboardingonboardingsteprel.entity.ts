import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN onboarding_onboarding AND onboarding_onboarding_step
 */
@Entity('onboarding_onboarding_onboarding_onboarding_step_rel')
export class OnboardingOnboardingOnboardingOnboardingStepRel {
  @Column({
    type: 'int'
  })
  onboarding_onboarding_id: number;

  // @ManyToOne(() => OnboardingOnboarding)
  // @JoinColumn({ name: 'onboarding_onboarding_id' })
  // onboarding_onboarding: OnboardingOnboarding;

  @Column({
    type: 'int'
  })
  onboarding_onboarding_step_id: number;

  // @ManyToOne(() => OnboardingOnboardingStep)
  // @JoinColumn({ name: 'onboarding_onboarding_step_id' })
  // onboarding_onboarding_step: OnboardingOnboardingStep;

}