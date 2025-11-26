import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_reconcile_model_line AND account_tax
 */
@Entity('account_reconcile_model_line_account_tax_rel')
export class AccountReconcileModelLineAccountTaxRel {
  @Column({
    type: 'int'
  })
  account_reconcile_model_line_id: number;

  // @ManyToOne(() => AccountReconcileModelLine)
  // @JoinColumn({ name: 'account_reconcile_model_line_id' })
  // account_reconcile_model_line: AccountReconcileModelLine;

  @Column({
    type: 'int'
  })
  account_tax_id: number;

  // @ManyToOne(() => AccountTax)
  // @JoinColumn({ name: 'account_tax_id' })
  // account_tax: AccountTax;

}