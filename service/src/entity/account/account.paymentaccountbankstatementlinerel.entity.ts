import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_bank_statement_line AND account_payment
 */
@Entity('account_payment_account_bank_statement_line_rel')
export class AccountPaymentAccountBankStatementLineRel {
  @Column({
    type: 'int'
  })
  account_bank_statement_line_id: number;

  // @ManyToOne(() => AccountBankStatementLine)
  // @JoinColumn({ name: 'account_bank_statement_line_id' })
  // account_bank_statement_line: AccountBankStatementLine;

  @Column({
    type: 'int'
  })
  account_payment_id: number;

  // @ManyToOne(() => AccountPayment)
  // @JoinColumn({ name: 'account_payment_id' })
  // account_payment: AccountPayment;

}