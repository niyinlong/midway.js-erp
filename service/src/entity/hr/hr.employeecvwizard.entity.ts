import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Print Resume
 */
@Entity('hr_employee_cv_wizard')
export class HrEmployeeCvWizard {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Primary Color
   */
  @Column({
    type: 'varchar'
  })
  color_primary: string;

  /**
   * Secondary Color
   */
  @Column({
    type: 'varchar'
  })
  color_secondary: string;

  /**
   * Skills
   */
  @Column({
    type: 'boolean'
  })
  show_skills: boolean;

  /**
   * Contact Information
   */
  @Column({
    type: 'boolean'
  })
  show_contact: boolean;

  /**
   * Others
   */
  @Column({
    type: 'boolean'
  })
  show_others: boolean;

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