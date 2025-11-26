import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN hr_employee AND res_partner_bank
 */
@Entity('employee_bank_account_rel')
export class EmployeeBankAccountRel {
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
  bank_account_id: number;

  // @ManyToOne(() => BankAccount)
  // @JoinColumn({ name: 'bank_account_id' })
  // bank_account: BankAccount;

}