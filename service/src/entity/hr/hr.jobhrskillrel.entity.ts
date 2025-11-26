import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN hr_job AND hr_skill
 */
@Entity('hr_job_hr_skill_rel')
export class HrJobHrSkillRel {
  @Column({
    type: 'int'
  })
  hr_job_id: number;

  // @ManyToOne(() => HrJob)
  // @JoinColumn({ name: 'hr_job_id' })
  // hr_job: HrJob;

  @Column({
    type: 'int'
  })
  hr_skill_id: number;

  // @ManyToOne(() => HrSkill)
  // @JoinColumn({ name: 'hr_skill_id' })
  // hr_skill: HrSkill;

}