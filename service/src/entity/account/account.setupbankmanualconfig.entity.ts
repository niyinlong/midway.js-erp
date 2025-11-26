import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Bank setup manual config
 */
@Entity('account_setup_bank_manual_config')
export class AccountSetupBankManualConfig {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Res Partner Bank
   */
  @Column({
    type: 'int'
  })
  res_partner_bank_id: number;

  // @ManyToOne(() => ResPartnerBank)
  // @JoinColumn({ name: 'res_partner_bank_id' })
  // res_partner_bank: ResPartnerBank;

  /**
   * Num Journals Without Account Bank
   */
  @Column({
    type: 'int'
  })
  num_journals_without_account_bank: number;

  /**
   * Num Journals Without Account Credit
   */
  @Column({
    type: 'int'
  })
  num_journals_without_account_credit: number;

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
   * New Journal Name
   */
  @Column({
    type: 'varchar'
  })
  new_journal_name: string;

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