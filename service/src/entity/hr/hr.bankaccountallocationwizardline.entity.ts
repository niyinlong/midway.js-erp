import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Bank Account Allocation Line (Wizard)
 */
@Entity('hr_bank_account_allocation_wizard_line')
export class HrBankAccountAllocationWizardLine {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Wizard
   */
  @Column({
    type: 'int'
  })
  wizard_id: number;

  // @ManyToOne(() => Wizard)
  // @JoinColumn({ name: 'wizard_id' })
  // wizard: Wizard;

  /**
   * Bank Account
   */
  @Column({
    type: 'int'
  })
  bank_account_id: number;

  // @ManyToOne(() => BankAccount)
  // @JoinColumn({ name: 'bank_account_id' })
  // bank_account: BankAccount;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Amount Type
   */
  @Column({
    type: 'varchar'
  })
  amount_type: string;

  /**
   * Amount
   */
  @Column({
    type: 'int'
  })
  amount: number;

  /**
   * Trusted
   */
  @Column({
    type: 'boolean'
  })
  trusted: boolean;

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