import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Skill level for employee
 */
@Entity('hr_employee_skill')
export class HrEmployeeSkill {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Skill
   */
  @Column({
    type: 'int'
  })
  skill_id: number;

  // @ManyToOne(() => Skill)
  // @JoinColumn({ name: 'skill_id' })
  // skill: Skill;

  /**
   * Skill Level
   */
  @Column({
    type: 'int'
  })
  skill_level_id: number;

  // @ManyToOne(() => SkillLevel)
  // @JoinColumn({ name: 'skill_level_id' })
  // skill_level: SkillLevel;

  /**
   * Skill Type
   */
  @Column({
    type: 'int'
  })
  skill_type_id: number;

  // @ManyToOne(() => SkillType)
  // @JoinColumn({ name: 'skill_type_id' })
  // skill_type: SkillType;

  /**
   * Employee
   */
  @Column({
    type: 'int'
  })
  employee_id: number;

  // @ManyToOne(() => Employee)
  // @JoinColumn({ name: 'employee_id' })
  // employee: Employee;

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
   * Validity Start
   */
  @Column({
    type: 'datetime'
  })
  valid_from: Date;

  /**
   * Validity Stop
   */
  @Column({
    type: 'datetime'
  })
  valid_to: Date;

  /**
   * Display Warning Message
   */
  @Column({
    type: 'boolean'
  })
  display_warning_message: boolean;

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