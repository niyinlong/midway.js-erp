import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN hr_employee AND hr_employee_category
 */
@Entity('employee_category_rel')
export class EmployeeCategoryRel {
  @Column({
    type: 'int'
  })
  employee_id: number;

  // @ManyToOne(() => Employee)
  // @JoinColumn({ name: 'employee_id' })
  // employee: Employee;

  @Column({
    type: 'int'
  })
  category_id: number;

  // @ManyToOne(() => Category)
  // @JoinColumn({ name: 'category_id' })
  // category: Category;

}