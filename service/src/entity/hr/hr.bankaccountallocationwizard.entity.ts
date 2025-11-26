import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Bank Account Allocation Wizard
 */
@Entity('hr_bank_account_allocation_wizard')
export class HrBankAccountAllocationWizard {
  @PrimaryGeneratedColumn()
  id: number;

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