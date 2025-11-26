import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_automatic_entry_wizard AND account_move_line
 */
@Entity('account_automatic_entry_wizard_account_move_line_rel')
export class AccountAutomaticEntryWizardAccountMoveLineRel {
  @Column({
    type: 'int'
  })
  account_automatic_entry_wizard_id: number;

  // @ManyToOne(() => AccountAutomaticEntryWizard)
  // @JoinColumn({ name: 'account_automatic_entry_wizard_id' })
  // account_automatic_entry_wizard: AccountAutomaticEntryWizard;

  @Column({
    type: 'int'
  })
  account_move_line_id: number;

  // @ManyToOne(() => AccountMoveLine)
  // @JoinColumn({ name: 'account_move_line_id' })
  // account_move_line: AccountMoveLine;

}