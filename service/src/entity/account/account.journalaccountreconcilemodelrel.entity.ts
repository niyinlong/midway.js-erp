import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_reconcile_model AND account_journal
 */
@Entity('account_journal_account_reconcile_model_rel')
export class AccountJournalAccountReconcileModelRel {
  @Column({
    type: 'int'
  })
  account_reconcile_model_id: number;

  // @ManyToOne(() => AccountReconcileModel)
  // @JoinColumn({ name: 'account_reconcile_model_id' })
  // account_reconcile_model: AccountReconcileModel;

  @Column({
    type: 'int'
  })
  account_journal_id: number;

  // @ManyToOne(() => AccountJournal)
  // @JoinColumn({ name: 'account_journal_id' })
  // account_journal: AccountJournal;

}