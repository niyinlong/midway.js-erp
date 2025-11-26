import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_resequence_wizard AND account_move
 */
@Entity('account_move_account_resequence_wizard_rel')
export class AccountMoveAccountResequenceWizardRel {
  @Column({
    type: 'int'
  })
  account_resequence_wizard_id: number;

  // @ManyToOne(() => AccountResequenceWizard)
  // @JoinColumn({ name: 'account_resequence_wizard_id' })
  // account_resequence_wizard: AccountResequenceWizard;

  @Column({
    type: 'int'
  })
  account_move_id: number;

  // @ManyToOne(() => AccountMove)
  // @JoinColumn({ name: 'account_move_id' })
  // account_move: AccountMove;

}