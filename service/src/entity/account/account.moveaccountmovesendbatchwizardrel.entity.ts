import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_move_send_batch_wizard AND account_move
 */
@Entity('account_move_account_move_send_batch_wizard_rel')
export class AccountMoveAccountMoveSendBatchWizardRel {
  @Column({
    type: 'int'
  })
  account_move_send_batch_wizard_id: number;

  // @ManyToOne(() => AccountMoveSendBatchWizard)
  // @JoinColumn({ name: 'account_move_send_batch_wizard_id' })
  // account_move_send_batch_wizard: AccountMoveSendBatchWizard;

  @Column({
    type: 'int'
  })
  account_move_id: number;

  // @ManyToOne(() => AccountMove)
  // @JoinColumn({ name: 'account_move_id' })
  // account_move: AccountMove;

}