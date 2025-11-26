import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN hr_departure_wizard AND hr_employee
 */
@Entity('hr_departure_wizard_hr_employee_rel')
export class HrDepartureWizardHrEmployeeRel {
  @Column({
    type: 'int'
  })
  hr_departure_wizard_id: number;

  // @ManyToOne(() => HrDepartureWizard)
  // @JoinColumn({ name: 'hr_departure_wizard_id' })
  // hr_departure_wizard: HrDepartureWizard;

  @Column({
    type: 'int'
  })
  hr_employee_id: number;

  // @ManyToOne(() => HrEmployee)
  // @JoinColumn({ name: 'hr_employee_id' })
  // hr_employee: HrEmployee;

}