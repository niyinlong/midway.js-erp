import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_journal_group AND account_journal
 */
@Entity('account_journal_account_journal_group_rel')
export class AccountJournalAccountJournalGroupRel {
  @Column({
    type: 'int'
  })
  account_journal_group_id: number;

  // @ManyToOne(() => AccountJournalGroup)
  // @JoinColumn({ name: 'account_journal_group_id' })
  // account_journal_group: AccountJournalGroup;

  @Column({
    type: 'int'
  })
  account_journal_id: number;

  // @ManyToOne(() => AccountJournal)
  // @JoinColumn({ name: 'account_journal_id' })
  // account_journal: AccountJournal;

}