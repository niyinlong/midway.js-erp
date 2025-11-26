import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_merge_wizard AND account_account
 */
@Entity('account_account_account_merge_wizard_rel')
export class AccountAccountAccountMergeWizardRel {
  @Column({
    type: 'int'
  })
  account_merge_wizard_id: number;

  // @ManyToOne(() => AccountMergeWizard)
  // @JoinColumn({ name: 'account_merge_wizard_id' })
  // account_merge_wizard: AccountMergeWizard;

  @Column({
    type: 'int'
  })
  account_account_id: number;

  // @ManyToOne(() => AccountAccount)
  // @JoinColumn({ name: 'account_account_id' })
  // account_account: AccountAccount;

}