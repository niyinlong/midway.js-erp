import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Create Automatic Entries
 */
@Entity('account_automatic_entry_wizard')
export class AccountAutomaticEntryWizard {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  /**
   * To
   */
  @Column({
    type: 'int'
  })
  destination_account_id: number;

  // @ManyToOne(() => DestinationAccount)
  // @JoinColumn({ name: 'destination_account_id' })
  // destination_account: DestinationAccount;

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
   * Action
   */
  @Column({
    type: 'varchar'
  })
  action: string;

  /**
   * Account Type
   */
  @Column({
    type: 'varchar'
  })
  account_type: string;

  /**
   * Date
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

  /**
   * Total Amount
   */
  @Column({
    type: 'int'
  })
  total_amount: number;

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

  /**
   * Percentage
   */
  @Column({
    type: 'varchar'
  })
  percentage: string;

}