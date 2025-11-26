import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_bank_statement AND ir_attachment
 */
@Entity('account_bank_statement_ir_attachment_rel')
export class AccountBankStatementIrAttachmentRel {
  @Column({
    type: 'int'
  })
  account_bank_statement_id: number;

  // @ManyToOne(() => AccountBankStatement)
  // @JoinColumn({ name: 'account_bank_statement_id' })
  // account_bank_statement: AccountBankStatement;

  @Column({
    type: 'int'
  })
  ir_attachment_id: number;

  // @ManyToOne(() => IrAttachment)
  // @JoinColumn({ name: 'ir_attachment_id' })
  // ir_attachment: IrAttachment;

}