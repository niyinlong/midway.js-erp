import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Skill Level
 */
@Entity('hr_skill_level')
export class HrSkillLevel {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Progress
   */
  @Column({
    type: 'int'
  })
  level_progress: number;

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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Default Level
   */
  @Column({
    type: 'boolean'
  })
  default_level: boolean;

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

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}