import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Account Journal Group
 */
@Entity('account_journal_group')
export class AccountJournalGroup {
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
   * Ledger group
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

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