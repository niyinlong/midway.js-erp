import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN hr_employee_cv_wizard AND hr_employee
 */
@Entity('hr_employee_hr_employee_cv_wizard_rel')
export class HrEmployeeHrEmployeeCvWizardRel {
  @Column({
    type: 'int'
  })
  hr_employee_cv_wizard_id: number;

  // @ManyToOne(() => HrEmployeeCvWizard)
  // @JoinColumn({ name: 'hr_employee_cv_wizard_id' })
  // hr_employee_cv_wizard: HrEmployeeCvWizard;

  @Column({
    type: 'int'
  })
  hr_employee_id: number;

  // @ManyToOne(() => HrEmployee)
  // @JoinColumn({ name: 'hr_employee_id' })
  // hr_employee: HrEmployee;

}