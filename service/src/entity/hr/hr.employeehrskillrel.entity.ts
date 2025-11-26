import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN hr_employee AND hr_skill
 */
@Entity('hr_employee_hr_skill_rel')
export class HrEmployeeHrSkillRel {
  @Column({
    type: 'int'
  })
  hr_employee_id: number;

  // @ManyToOne(() => HrEmployee)
  // @JoinColumn({ name: 'hr_employee_id' })
  // hr_employee: HrEmployee;

  @Column({
    type: 'int'
  })
  hr_skill_id: number;

  // @ManyToOne(() => HrSkill)
  // @JoinColumn({ name: 'hr_skill_id' })
  // hr_skill: HrSkill;

}