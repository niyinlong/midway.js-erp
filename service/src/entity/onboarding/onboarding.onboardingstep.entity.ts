import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Onboarding Step
 */
@Entity('onboarding_onboarding_step')
export class OnboardingOnboardingStep {
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
   * Font Awesome Icon when completed
   */
  @Column({
    type: 'varchar'
  })
  done_icon: string;

  /**
   * Step Image Filename
   */
  @Column({
    type: 'varchar'
  })
  step_image_filename: string;

  /**
   * Opening action
   */
  @Column({
    type: 'varchar'
  })
  panel_step_open_action_name: string;

  /**
   * Title
   */
  @Column({
    type: 'jsonb'
  })
  title: object;

  /**
   * Description
   */
  @Column({
    type: 'jsonb'
  })
  description: object;

  /**
   * Button text
   */
  @Column({
    type: 'jsonb'
  })
  button_text: object;

  /**
   * Text to show when step is completed
   */
  @Column({
    type: 'jsonb'
  })
  done_text: object;

  /**
   * Alt Text for the Step Image
   */
  @Column({
    type: 'jsonb'
  })
  step_image_alt: object;

  /**
   * Is per company
   */
  @Column({
    type: 'boolean'
  })
  is_per_company: boolean;

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